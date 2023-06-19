import React, {useContext} from "react";
import { LanguageContext } from "./LanguageContext";

export default function DisplayLanguage() {

    const language = useContext(LanguageContext);

    const strings = {
        en: {
            LANGUAGE: "English",
            SELECT_LANGUAGE: "Select language: ",
            SELECTED_LANGUAGE: "Selected language: ",
        },
        it: {
            LANGUAGE: "Italiano",
            SELECT_LANGUAGE: "Seleziona la lingua: ",
            SELECTED_LANGUAGE: "Lingua selezionata: ",
        },
        de: {
            LANGUAGE: "Deutsch",
            SELECT_LANGUAGE: "Sprache auswählen: ",
            SELECTED_LANGUAGE: "Ausgewählte Sprache: ",
        },
        fr: {
            LANGUAGE: "Français",
            SELECT_LANGUAGE: "Sélectionner une langue : ",
            SELECTED_LANGUAGE: "Langue sélectionnée : ",
          },
          es: {
            LANGUAGE: "Español",
            SELECT_LANGUAGE: "Seleccionar idioma: ",
            SELECTED_LANGUAGE: "Idioma seleccionado: ",
          },
          tr: {
            LANGUAGE: "Türkçe",
            SELECT_LANGUAGE: "Dil seç: ",
            SELECTED_LANGUAGE: "Seçilen Dil: ",
          },

    }

    return (
        <div>
          <div>
            {strings[language].SELECTED_LANGUAGE} {strings[language].LANGUAGE}
          </div>
          <label>{strings[language].SELECT_LANGUAGE}</label>
        </div>
    );
};