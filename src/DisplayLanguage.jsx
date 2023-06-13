import React from "react";
import { LanguageContext } from "./LanguageContext";

export default class DisplayLanguage extends React.Component {


strings = {
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
    }
}

    render() {
        return (
            <LanguageContext>
        {language => {
            return (
          <div>
            <div>{this.strings[language].SELECTED_LANGUAGE} {this.strings[language].LANGUAGE}</div>
            <label>{this.strings[language].SELECT_LANGUAGE} </label>
          </div>
        )}}
      </LanguageContext>
          );
    }
}