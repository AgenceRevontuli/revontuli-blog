import React from 'react';
import { connect, styled } from 'Frontity';
import Preview from '../list/list';
import Recent from '../list/recent';

const Home = ({ state }) => {
    const data = state.source.get(state.router.link);
    console.log(data)


    return(
        <Main>
            <Header>
                    <div className="header--items">
                        <h1>Blog de l’entrepreneur digital</h1>
                        <p>Bienvenue sur le blog de Revontuli. Un concentré d’actus et de tips pour votre stratégie de marketing et de création de projet digital. </p>
                        <div>
                            <a href="#" className="cta--primary">
                                Tourner la page <i class="lni lni-arrow-right"></i>
                            </a>
                        </div>
                    </div>
            </Header>

            <LastArticle>
                <Recent />
            </LastArticle>

            <PreviewArticles>
                <Preview />
            </PreviewArticles>


        </Main>
    )
}

export default connect(Home);

const Main = styled.main`
    .headerSection{
        padding: 20px 0px;
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
`;

const Header = styled.header`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    .header--tagline {
        font-size: 1em;
        font-family: Poppins;
        color: #C0C0C0;
    }
    .header--items {
        padding: 40px;
        width: 90%;
        text-align: center;
    }
    h1 {
        font-weight: 700;
        font-size: 1.5em;
        margin-bottom: 20px;
    }
    p {
        font-size: 1.1em;
    }
`;

const Item = styled.div`
    flex: 0 0 80%;    
    transition: transform 300ms ease 100ms;
`;

const PreviewArticles = styled.section`
`;

const LastArticle = styled.section`
`;

