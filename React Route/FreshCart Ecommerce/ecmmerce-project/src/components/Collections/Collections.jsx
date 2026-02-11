import { useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet } from "react-helmet";

export default function Collections() {
  const [collections, setCollections] = useState([]);

  async function fetchAllCollections() {
    try {
      const { data } = await axios('https://ecommerce.routemisr.com/api/v1/categories');
      setCollections(data.data);
      console.log(`collections data`, data);
    } catch (error) {
      console.error("Error fetching collections: ", error);
    }
  }

  useEffect(() => {
    fetchAllCollections();
  }, []);

  return (
    <>
    <Helmet>
      <title>Collections</title>
    </Helmet>
      <div className="container my-5"> {/* Bootstrap container and spacing */}
        <h2 className="text-center mb-4">Collections Component</h2>
        <div className="row"> {/* Bootstrap row for grid layout */}
          {
            collections.map((collection) => (
              <div key={collection._id} className="col-md-3 col-sm-6 mb-4"> {/* Responsive columns */}
                <div className="card h-100"> {/* Card with full height */}
                  <img 
                    src={collection.image} 
                    alt={collection.name} 
                    className="card-img-top img-fluid" // Card image
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">{collection.name}</h5> {/* Center title */}
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
}