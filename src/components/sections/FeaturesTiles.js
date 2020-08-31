import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
// import Image from "../elements/Image";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );

  const sectionHeader = {
    title: "Ce oferim?",
    paragraph:
      "Facultatea oferă programe de studiu la nivel de Licenţă, Master şi Doctorat, compatibile cu sistemul european de credite transferabile.",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    {/* <Image
                      src={require("./../../assets/images/feature-tile-icon-01.svg")}
                      alt="Features tile icon 01"
                      width={64}
                      height={64}
                    /> */}
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Centre şi laboratoare</h4>
                  <p className="m-0 text-sm">
                    Facultatea de Automatică şi Calculatoare îşi desfaşoară
                    activitatea de cercetare ştiinţifică în cadrul unor centre
                    de cercetare şi laboratoare de cercetare. Menţinerea
                    excelenţei în cercetare este una din priorităţile
                    facultăţii, cercetarea ştiinţifică fiind orientată pe
                    proiecte şi programe naţionale, europene şi internaţionale.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    {/* <Image
                      src={require("./../../assets/images/feature-tile-icon-02.svg")}
                      alt="Features tile icon 02"
                      width={64}
                      height={64}
                    /> */}
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Relaţii internaţionale</h4>
                  <p className="m-0 text-sm">
                    Facultatea de Automatică și Calculatoare este permanent
                    deschisă colaborărilor ştiinţifice şi schimburilor academice
                    din lumea întreagă, în domeniile noilor tehnologii,
                    automaticii, ştiintei calculatoarelor şi tehnologiei
                    informaţiei.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    {/* <Image
                      src={require("./../../assets/images/feature-tile-icon-03.svg")}
                      alt="Features tile icon 03"
                      width={64}
                      height={64}
                    /> */}
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Scoala doctorala</h4>
                  <p className="m-0 text-sm">
                    Școala doctorala de Automatica și Calculatoare (SD_AC) este
                    organizata în cadrul Universitatii Politehnica din Bucuresti
                    (UPB), si isi desfasoara activitatea in conformitate cu
                    Regulamentul privind organizarea Scolilor doctorale in UPB
                    (2018).
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    {/* <Image
                      src={require("./../../assets/images/feature-tile-icon-04.svg")}
                      alt="Features tile icon 04"
                      width={64}
                      height={64}
                    /> */}
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Licenţă</h4>
                  <p className="m-0 text-sm">
                    În cadrul primilor doi ani de studiu din ciclul I, planurile
                    de învăţământ ale celor două domenii sunt comune în
                    proporţie de 80%. Domeniile de studii cuprind mai multe
                    specializări, în cadrul cărora studenţii urmează cursuri
                    obligatorii ce definesc profilul de bază al specializării
                    cât şi cursuri opţionale care oferă posibilitatea
                    individualizării pregătirii de specialitate prin discipline
                    specifice în planurile de învăţământ ale anilor III şi IV.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    {/* <Image
                      src={require("./../../assets/images/feature-tile-icon-05.svg")}
                      alt="Features tile icon 05"
                      width={64}
                      height={64}
                    /> */}
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Masterat</h4>
                  <p className="m-0 text-sm">
                    Facultatea de Automatică şi Calculatoare oferă 22 programe
                    de studii universitare de masterat în domeniile:
                    Calculatoare şi Tehnologia Informaţiei – 10 programe
                    Ingineria Sistemelor – 11 programe Inginerie și Management –
                    1 program
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    {/* <Image
                      src={require("./../../assets/images/feature-tile-icon-06.svg")}
                      alt="Features tile icon 06"
                      width={64}
                      height={64}
                    /> */}
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Dezvoltare profesională</h4>
                  <p className="m-0 text-sm">
                    Colaborarea cu industria de IT şi automatică reprezintă una
                    dintre preocupările constante ale facultăţii. Parteneriatele
                    cu marile companii, dar şi cu companiile mai mici, dispuse
                    să se implice în utilizarea de tehnologii noi, de mare
                    potenţial, sunt esenţiale în pregătirea armonioasă a
                    studenţilor în domenii atât de dinamice cum sunt IT-ul sau
                    controlul automat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
