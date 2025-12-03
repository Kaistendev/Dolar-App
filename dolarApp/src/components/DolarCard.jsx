import React, { useState, useEffect } from "react";

const DolarCard = ({ title, fetchFn }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchFn();
        setData(response.data);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };
    getData();
  }, [fetchFn]);

  return (
    <div className="glass-card h-100 p-4 position-relative overflow-hidden">
      <div className="card-body text-center position-relative z-1">
        <h5 className="card-title fw-bold mb-4 text-uppercase tracking-wider">
          {title === "Oficial" ? "🏛️" : "💵"} Dólar {title}
        </h5>

        {data ? (
          <div className="d-flex flex-column align-items-center">
            <div className="display-4 fw-bold mb-2">
              {data.promedio} <span className="fs-4">Bs</span>
            </div>
            <div className="badge bg-white bg-opacity-10 px-3 py-2 rounded-pill mb-3 border border-white border-opacity-25">
               <span className="text-muted-custom small">
                Actualizado: {data.fechaActualizacion
                ? new Date(data.fechaActualizacion).toLocaleString("es-VE", {
                    hour: '2-digit',
                    minute: '2-digit',
                    day: 'numeric',
                    month: 'short'
                  })
                : "N/A"}
              </span>
            </div>
          </div>
        ) : (
          <div className="d-flex justify-content-center align-items-center py-5">
            <div className="spinner-border text-light" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DolarCard;
