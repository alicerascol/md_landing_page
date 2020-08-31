import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "Departamente",
    paragraph: "",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <h3 className="mt-0 mb-12">Departamentul de Calculatoare</h3>
                <p className="m-0">
                  Departamentul de Calculatoare reprezintă un centru de
                  cercetare şi de educare a specialiştilor în domeniul
                  “Calculatoare şi Tehnologia Informaţiei”, oferind cunoştinţe
                  şi competenţe de înalt nivel în domeniul absolvenţiilor
                  programelor de licenţă, masterat şi doctorat oferite de
                  departament. Departamentul asigură cursurile de specialitate
                  din cadrul secţiei de Calculatoare a facultăţii precum şi
                  cursuri de introducere în informatică şi programarea
                  calculatoarelor pentru alte facultăţi din cadrul
                  universităţii.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/calculatoare.jpg")}
                  alt="Calculatoare"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <h3 className="mt-0 mb-12">
                  Departamentul de Automatică şi Ingineria Sistemelor
                </h3>
                <p className="m-0">
                  Principale preocupări şi obiective: pregătirea resurselor
                  umane în domeniul Automaticii şi Ingineriei Sistemelor;
                  producerea de cunoaştere în domeniul Ştiintei Sistemelor,
                  Automaticii şi Informaticii Industriale; conceperea şi
                  realizarea de produse şi tehnnologii pentru automatizarea
                  proceselor şi asigurarea consultanţei, evaluării şi asistenţei
                  tehnice.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/is.jpg")}
                  alt="IS"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <h3 className="mt-0 mb-12">
                  Departamentul de Automatică şi Informatică Industrială
                </h3>
                <p className="m-0">
                  Are ca obiective principale pregătirea resurselor umane în
                  domeniul automaticii şi informaticii industriale asigurând
                  cursuri de specialitate şi realizând cercetare, consultanţă şi
                  evaluare în acest domeniu.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/infoaplicata.jpg")}
                  alt="Informatica aplicata"
                  width={528}
                  height={396}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
