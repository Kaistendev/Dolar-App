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
    <div className="card border-0 shadow-sm rounded-4 my-3 bg-light">
      <div className="card-body text-center py-4">
        <h5 className="card-title fw-bold text-dark mb-2">
          💵 Dólar {title}
        </h5>

        {data ? (
          <>
            <p className="display-6 text-success fw-semibold">
              {data.promedio} Bs.
            </p>
            <p className="text-muted small">
              Última actualización:{" "}
              {data.fechaActualizacion
                ? new Date(data.fechaActualizacion).toLocaleString("es-VE")
                : "Fecha no disponible"}
            </p>
          </>
        ) : (
          <div className="d-flex justify-content-center align-items-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DolarCard;
