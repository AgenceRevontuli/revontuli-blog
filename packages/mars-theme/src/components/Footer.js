import React from 'react';
import { styled } from 'frontity';
import Logo from "../statics/img/logo-revontuli-2020-agence-digital-blog.svg";

 
const Footer = () => {
    return (
        <FooterSection>
            <div className="menuSection">
                <div className="sectionInfo footer--section-info">
                    <img src={Logo} alt="" />
                    <p>Blog de conseils et d’accompagnement sur les sujets digitaux. Rédigé avec ❤️ par Tristan Tornatore, ex startup coordinateur pour Google for Startups et fondateur de votre agence d’expérience digital : Revontuli.</p>
                </div>
                <div className="SectionPlan footer--section">
                    <h2>Thématiques</h2>
                    <hr />
                    <ul>
                        <li>Data - Analyse de données</li>
                        <li>Référencement Naturel - SEO</li>
                        <li>Publicité en ligne - SEA</li>
                        <li>Marketing Digital - WebMarketing</li>
                        <li>Expérience Utilisateur - UX</li>
                        <li>Développement Web - Création de site internet</li>
                    </ul>
                </div>
                <div className="SectionLegale footer--section">
                    <h2>Infos Pratiques</h2>
                    <hr />
                    <ul>
                        <li>Site internet de l'agence</li>
                        <li>Nos prestations</li>
                        <li>Politique de confidentialité</li>
                        <li>Mentions légales</li>
                    </ul>
                    <p>contact@revontuli.fr</p>
                </div>
            </div>
           
            <div className="copyRight">
                <p>2020 - Site développé par votre renard préféré <span role="img" aria-label="revontuli-marketing-digital">🦊</span></p>
            </div>
        </FooterSection>
    )
}

export default Footer;

const FooterSection = styled.footer`
    padding: 40px;
    text-align: center;
    background-color: #f4f4f4;
    ul, li {
        list-style: none;
        margin: 0;
        padding: 0;
        font-size: 0.9em;

    }
    img {
        width: 40%;
    }
    p {
        font-size: 1em;
    }
    li {
        margin: 15px 0; 
    }
    h2, p, li {
        line-height: 1.6em;
        margin-top: 40px;
    }
    h2 {
        padding-bottom: 20px;
        font-size: 16px;
    }
    .copyRight {
        font-size: 12px;
        text-align: center;
        margin: 80px 0px;
        font-weight: 900;
        span {
            margin-left: 15px;
        }
    }
`;