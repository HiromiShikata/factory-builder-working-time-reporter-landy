import { Row, Col } from "antd";
import { TFunction, withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  Extra,
  Language,
  LanguageSwitch,
  LanguageSwitchContainer,
  Large,
  Para,
  Chat,
  ExternalLink,
} from "./styles";

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contact")}</Language>
              <Large to="$#contact">{t("Tell us everything")}</Large>
              <Para>
                {t(`Do you have any question? Feel free to reach out.`)}
              </Para>
              <Chat onClick={() => scrollTo('contact')}>{t(`Let's Chat`)}</Chat>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Policy")}</Title>
              <ExternalLink 
                href="https://uminoseisaku.com/privacypolicy-en.html" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {t("Privacy Policy")}
              </ExternalLink>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Language>{t("Language")}</Language>
              <LanguageSwitchContainer>
                <LanguageSwitch onClick={() => handleChange("en")}>
                  <SvgIcon
                    src="united-states.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
                <LanguageSwitch onClick={() => handleChange("es")}>
                  <SvgIcon
                    src="spain.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
              </LanguageSwitchContainer>
            </Col>
          </Row>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Address")}</Language>
              <Para>2-chome-2-15-531 Minamiaoyama,</Para>
              <Para>Minato City, Tokyo-to,</Para>
              <Para>Japan 107-0062</Para>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row justify="center" align="middle" style={{ paddingTop: "3rem" }}>
              <Col style={{ textAlign: "center", marginRight: "1em" }}>UMINO Seisaku Inc.</Col>
              <Col style={{ textAlign: "center", color: "#666", fontSize: "0.7em" }}>Founded in Feb. 20, 2018</Col>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
