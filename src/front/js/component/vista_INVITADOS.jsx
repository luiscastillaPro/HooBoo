import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import BookCard from "./BookCard.jsx";
import Footer from "../component/Footer.jsx";
import Navbar from './Navbar.jsx'; 
import BannerOnlyHome from "./BannerOnlyHome.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../../styles/buscador_explorar.css";
import "../../styles/vista_INVITADOS.css";
import "../../styles/Navbar.css";

const VistaInvitados = () => {
    const { store, actions } = useContext(Context);
    const [searchBox, setSearchBox] = useState("");

    useEffect(() => {
        if (!store.user || Object.keys(store.user).length === 0) {
            actions.obtenerDatosUsuario();
        }
    }, []);

    const handleSearch = (event) => {
        setSearchBox(event.target.value);
    };

    // Función para limpiar el campo de búsqueda
    const clearSearch = () => {
        setSearchBox('');
    };

    const flattenBaseRespaldo = (baseRespaldo) => {
        return Object.values(baseRespaldo).flat();
    };

    const booksToDisplay = store.books && store.books.length > 0 ? store.books : flattenBaseRespaldo(store.base_respaldo);

    const filteredBooks = booksToDisplay.filter((book) => {
        const title = book.volumeInfo.title.toLowerCase();
        const authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(" ").toLowerCase() : "";
        const description = book.volumeInfo.description ? book.volumeInfo.description.toLowerCase() : "";
        return title.includes(searchBox.toLowerCase()) ||
            authors.includes(searchBox.toLowerCase()) ||
            description.includes(searchBox.toLowerCase());
    });

    return (
        <>
            <div className='headerHome'>
                <BannerOnlyHome />
                <Navbar />
            </div>

            <div className="searchBoxMarINVITADOS">
                <h3 className="welcome-messageINVITADOS">Explora un mundo de historias infinitas</h3>
                <div className="searchContainerINVITADOS">
                    <input
                        type="text"
                        placeholder="Buscar..."
                        value={searchBox}
                        onChange={handleSearch}
                        className="searchInput"
                    />
                    {searchBox ? (
                        <FontAwesomeIcon
                            icon={faTimes} // Ícono de "X"
                            className="clearSearchIcon"
                            onClick={clearSearch} // Limpiar la búsqueda al hacer clic
                        />
                    ) : (
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass} // Ícono de búsqueda (lupa)
                            className="searchIcon"
                        />
                    )}
                </div>
                {filteredBooks.length === 0 && searchBox && (
                    <p className="no-resultsINVITADOS">No se encontraron resultados</p>
                )}
            </div>
            
            {store.loading ? (
                <div className="loading-containerINVITADOS">
                    <p>Cargando libros...</p>
                </div>
            ) : (
                <div className="book-listINVITADOS">
                    {filteredBooks.length > 0 ? (
                        filteredBooks.map((book, index) => (
                            <BookCard key={index} book={book} />
                        ))
                    ) : null}
                </div>
            )}

            <Footer />
        </>
    );
};

export default VistaInvitados;
