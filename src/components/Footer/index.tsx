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
            <Col span={2} lg={8} md={8} sm={12} xs={12}>
              <Label>{t("Address")}</Label>
              <Para>AnteiKA SARL</Para>
              <Para>24 montée Saint Sébstien</Para>
              <Para>60002 LYON</Para>
            </Col>
            <Col span={10}>
              <Label>{"No centralized server"}</Label>
              <Para>
                {"This site is distributed by IPFS"}
              </Para>
              <a
              href="https://bafybeihchdypipr7p3fm6hdek6lxmgig24s7xvv57z4ebmmc3uanmppvha.ipfs.dweb.link/"
              target="_blank"
              rel="noopener noreferrer"
              >
              {"ipfs://bafybeihchdyp...4ebmmc3uanmppvha"}
              </a>
            </Col>
            <Col span={2} lg={6} md={6} sm={12} xs={12}>
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
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
