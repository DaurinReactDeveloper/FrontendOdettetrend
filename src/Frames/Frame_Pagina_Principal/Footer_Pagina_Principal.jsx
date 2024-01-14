import "/src/css/Formato_Frame_Inicio.css";

export function Footer({
  backgroundClass,
  colorfooter,
  footer_svg_color,
  redes_sociales_color,
  footer_color_p,
}) {
  return (
    <div>
      <footer className={footer_color_p}>
        <section className={`row sectionfooter ${colorfooter}`}>
          <div className="col-md-auto">
            <p className="odette odette_footer">“OdetteTrend.com"</p>
          </div>

          <div className="col-md-auto col_footer">
            <div className="div_footer_icon_text">
              <span className="material-symbols-outlined icon_footer">
                contact_mail
              </span>
              <h2>Correos Electrónicos </h2>
            </div>
            <p className="p_footer">info@odette.com.do</p>
            <p className="p_footer">ventas@odette.com.do</p>
          </div>

          <div className="col-md-auto col_footer">
            <div className="div_footer_icon_text">
              <span className="material-symbols-outlined icon_footer">
                location_on
              </span>
              <h2>Ubicacion</h2>
            </div>
            <p className="p_footer">Tienda Totalmente Online</p>
          </div>

          <div className={`col-md-auto col_footer2 ${backgroundClass}`}>
            <h2 className={`h2_footer ${redes_sociales_color}`}>
              Redes Sociales
            </h2>
            <div className="svg">
              <a
                href="https://www.instagram.com/dauringonzalez16?igsh=MnltNG5wbTc2OGIw&utm_source=qr"
                target="_blank"
              >
                <svg
                  className={`svg_footer ${footer_svg_color}`}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"
                  />
                </svg>
              </a>

              <a href="https://wa.link/0bzcko" target="_blank">
                <svg
                  className={`svg_footer ${footer_svg_color}`}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z"
                  />
                </svg>
              </a>

              <a
                href="https://www.facebook.com/dauringonzalez16?mibextid=LQQJ4d"
                target="_blank"
              >
                <svg
                  className={`svg_footer ${footer_svg_color}`}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
                  />
                </svg>
              </a>
            </div>

            <p className="odette_footer_red">“OdetteTrend.com"</p>
            <p className="p_web">
              Pagina Web diseñada y desarrollada por{" "}
              <span className={`DG ${redes_sociales_color}`}>
                Daurin Gonzalez
              </span>
            </p>
          </div>
        </section>
      </footer>
    </div>
  );
}