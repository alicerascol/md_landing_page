import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const Testimonial = ({
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
    "testimonial section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "testimonial-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

  const sectionHeader = {
    title: "Testimoniale studenti",
    paragraph:
      "Misiunea Facultăţii de Automatică şi Calculatoare este aceea de a potenţa cercetarea ştiinţifică de nivel înalt, de a împărtăşi cunoaştere prin educaţie în domeniul Calculatoare şi Tehnologia Informaţiei şi în domeniul Ingineria Sistemelor, şi de a oferi studenţilor şi cadrelor didactice din facultate un mediu profesional şi social stimulativ, de elită.",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div
              className="tiles-item reveal-from-right"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Absolventi bine pregatiti cu grad ridicat de insertie pe
                    piata de munca.
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">
                    Popescu Ana
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Facultatea de Automatică şi Calculatoare pregăteşte
                    ingineri specialişti în domeniile Ingineria Sistemelor şi
                    Calculatoare şi Tehnologia Informaţiei pe baza unor programe
                    de studii moderne, în care aspectele teoretice sunt îmbinate
                    cu excelenţa practică.
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">
                    Ionescu Maria
                  </span>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-left"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — In particular, misiunea Facultăţii de Automatică şi
                    Calculatoare este aceea de a potenţa cercetarea ştiinţifică
                    de nivel înalt, de a împărtăşi cunoaştere prin educaţie în
                    domeniul Calculatoare şi Tehnologia Informaţiei şi în
                    domeniul Ingineria Sistemelor, şi de a oferi studenţilor şi
                    cadrelor didactice din facultate un mediu profesional şi
                    social stimulativ, de elită.
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">
                    George Popescu
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
