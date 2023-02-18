import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Layout from "./Layout";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return (
      <Layout>
        <Loading />
      </Layout>
    );
  }

  if (tours.length === 0) {
    return (
      <Layout>
        <div className="text-center">
          <h1 className="mb-8 text-4xl font-bold tracking-wide">
            No Tours Left
          </h1>
          <button
            onClick={fetchTours}
            className="w-32 rounded-full border border-blue-400 py-1 px-2 text-xl tracking-wider text-blue-400 duration-200 ease-in-out focus:outline-none focus:ring focus:ring-blue-400/50 hocus:bg-blue-400 hocus:text-white"
          >
            Refresh
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Tours tours={tours} removeTour={removeTour} />
    </Layout>
  );
}
