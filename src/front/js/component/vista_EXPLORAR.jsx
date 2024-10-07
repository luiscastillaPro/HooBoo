import React, { useContext, useState, useEffect } from "react"; // Importa useEffect
import { Context } from "../store/appContext";
import BookCard from "./BookCard.jsx";
import "../../styles/BookCard.css";
import Footercolapsado from "./Footercolapsado.jsx";
import Navbaractivo from "./Navbaractivo.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../../styles/buscador_explorar.css";
import "../../styles/view_explorar.css";

const VistaExplorar = () => {
    const { store, actions } = useContext(Context); // Agregamos actions
    const [searchBox, setSearchBox] = useState("");

    useEffect(() => {
        // Verifica si ya hay un usuario cargado
        if (!store.user || Object.keys(store.user).length === 0) {
            actions.obtenerDatosUsuario();
        }
    }, []); 

    const handleSearch = (event) => {
        setSearchBox(event.target.value);
    };

    const filteredBooks = store.books.filter((book) => {
        const title = book.volumeInfo.title.toLowerCase();
        const authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(" ").toLowerCase() : "";
        const description = book.volumeInfo.description ? book.volumeInfo.description.toLowerCase() : "";
        return title.includes(searchBox.toLowerCase()) ||
            authors.includes(searchBox.toLowerCase()) ||
            description.includes(searchBox.toLowerCase());
    });

    const nombreUsuario = store.user?.username || "usuario";

    return (
        <>
            <Navbaractivo />
            <div className="searchBoxMar">
                <h3 className="welcome-message">Bienvenido a tu back office, {nombreUsuario}!</h3>
                <div className="searchContainer">
                    <input
                        type="text"
                        placeholder="Buscar..."
                        value={searchBox}
                        onChange={handleSearch}
                        className="searchInput"
                    />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />
                </div>
            </div>
            {store.loading ? (
                <div className="loading-container">
                    <p>Cargando libros...</p>
                </div>
            ) : (
                <div className="book-list">
                    {filteredBooks.length > 0 ? (
                        filteredBooks.map((book, index) => (
                            <BookCard
                                key={index}
                                book={book}
                            />
                        ))
                    ) : (
                        <p className="no-results">No se encontraron resultados</p>
                    )}
                </div>
            )}

            <Footercolapsado />
        </>
    );
};

export default VistaExplorar;
