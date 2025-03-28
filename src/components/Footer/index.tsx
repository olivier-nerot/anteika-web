import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={8} md={8} sm={12} xs={12}>
              <Label>{t("Address")}</Label>
              <Para>AnteiKA SARL</Para>
              <Para>24 montée Saint Sébstien</Para>
              <Para>60002 LYON</Para>
            </Col>
            <Col lg={10} md={10} sm={12} xs={12}>
              <Label>{t("Contact")}</Label>
              <Para>
                {t(`Do you have any question? Feel free to reach out.`)}
              </Para>
              <a href="mailto:contact@anteika.fr">
                <Chat>{t(`Let's Chat`)}</Chat>
              </a>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
            <Label htmlFor="select-lang">{t("Language")}</Label>
              <LanguageSwitchContainer>
                <LanguageSwitch onClick={() => handleChange("fr")}>
                  <Para>FR</Para>
                </LanguageSwitch>
                <LanguageSwitch onClick={() => handleChange("en")}>
                  <Para>EN</Para>
                </LanguageSwitch>
              </LanguageSwitchContainer>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="logo.svg"
                  aria-label="homepage"
                  width="200px"
                  height="64px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="https://github.com/olivier-nerot"
                src="github.svg"
              />
              <SocialLink
                href="https://twitter.com/olivier_n"
                src="twitter.svg"
              />
              <SocialLink
                href="https://www.linkedin.com/in/oliviernerot/"
                src="linkedin.svg"
              />
              <SocialLink
                href="https://medium.com/@olivier_n/"
                src="medium.svg"
              />
              <SocialLink
                href="https://tinyurl.com/onerot"
                src="youtube.svg"
              />
            </FooterContainer>
          </Row>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <Col>
              <p>{"Site distribué sur IPFS (Inter Planetory File System)"}</p>
            </Col>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
