import React from 'react';
import { connect, styled } from 'Frontity';
import LatestCard from '../cartUi/LatestCard';
import HeaderImg from '../../statics/img/featured_portrait_ramsaxel.jpg';
import Preview from '../list/list';

const Home = ({ state }) => {
    const data = state.source.get(state.router.link);
    console.log(data)


    return(
        <Main>
            <Header>
                    <div className="header--items">
                        <p className="header--tagline"><span role="img" aria-label="revontuli-marketing-digital">🦊</span>Marketing | Data | UX | AI | Webdesign | Développement</p>
                        <hr/>
                        <h1>Articles complets pour de vrais entrepreneurs sur le marketing digital</h1>
                        <p>On croise beaucoup d'articles sur le marketing digital. Tous pleins de promesses, qui ne font que flirter avec les sujets digitaux. Ce qu'on vous propose ici, c'est d'aller au coeur du sujet. Ce n'est pas un blog pour les rêveurs, alors si tu un vrai de vrai, bienvenue entre nos lignes.</p>
                        <div>
                            <a href="#" className="cta--primary">
                                Tourner la page <i class="lni lni-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                    <div className="header--items">
                        <img src={HeaderImg} alt=""/>
                    </div>
            </Header>

            <PreviewArticles>
                <Preview />
            </PreviewArticles>


        </Main>
    )
}

export default connect(Home);

const Main = styled.main`
    .headerSection{
        padding: 80px 0px;
        text-align: center;
        line-height: 1.6em;
        margin: 40px 0px;
        span {
            font-size: 48px;
        }
        h2{
            font-size: 2.5em;
            line-height: 1.4em;
            font-weight: 900;
        }
    }
    width: 100%;
    @media screen and (min-width: 950px){
        width: 80%;
        margin: 0 auto;
    }
`;

const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    height: 85vh;
    width: 100%;
    .header--tagline {
        font-size: 1em;
        font-family: Poppins;
        color: #C0C0C0;
    }
    .header--items {
        padding: 40px;
        width: 50%;
        img {
            width: 100%;
            border-radius: 10px;
        }
        hr {
            border: 1px solid #f4f4f4;
        }
    }
    h1 {
        font-weight: 700;
        font-size: 2.6em;
        margin-bottom: 20px;
    }
    @media screen and (min-width: 950px) {
        display: flex;
    }
`;

const Item = styled.div`
    flex: 0 0 80%;    
    transition: transform 300ms ease 100ms;
`;

const PreviewArticles = styled.section`
`;

