import React from 'react';
import { styled } from 'frontity';
 
const Footer = () => {
    return (
        <FooterSection>
            <div className="menuSection">
                <div className="sectionInfo footer--section-info">
                    <h2>Revontuli - Agence Marketing Digital</h2>
                    <p>Revontuli est une agence de marketing digital. Notre approche est essentiellement portée sur l'expérience utilisateur. Après des années à accompagner des startups et des PME pour des groupes comme Google ou encore NRJ, nous avons décidé de créer notre agence. Notre objectif, redonner du sens à vos actions digitale. Profitez des opportunités du numérique dès maintenant !</p>
                </div>
                <div className="SectionPlan footer--section">
                    <h2>Catégories d'articles</h2>
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
    background-color: #2a343c;
    ul, li {
        list-style: none;
        margin: 0;
        padding: 0;
        font-size: 0.9em;

    }
    li {
        margin: 15px 0; 
    }
    h2, p, li {
        color: #fff!important;
        line-height: 1.6em;
    }
    h2 {
        padding-bottom: 20px;
        font-size: 18px;
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
    @media screen and (min-width: 950px) {
        .menuSection {
            width: 80%;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            .footer--section-info {
                width: 50%;
                padding: 15px;
                margin-right: 50px;
            }
            .footer--section {
                width: 20%;
                padding: 15px 30px;
            }
        }
    }
`;