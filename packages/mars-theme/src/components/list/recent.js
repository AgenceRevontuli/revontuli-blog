import React from "react";
import { connect, styled, decode } from "frontity";
import Link from "../link";

const recent = ({ state }) => {
    const data = state.source.get(state.router.link)

    // >> Fetch data of the article to display it on homepage as a recent article
    const recentTag = state.source.post[138];
    console.log(recentTag);


    // >> Fetch the featured media URL by ID    
    const featuredMediaId = recentTag.featured_media;

    const media = state.source.attachment[featuredMediaId].source_url;
    console.log(media);
        // Display a background-image style
    const backgroundImageStyle = {
        backgroundImage: "url(" + media + ")"
    };

    // >> Fetch the author object by the article ID
    const author = state.source.author[recentTag.author];
    console.log(author);

    // >> Fecth the categories items by the article ID
    const category = state.source.category[recentTag.categories];
    console.log(category);



    return (    

        <Link link={recentTag.link} >
            <Recent__card style={backgroundImageStyle}>
                <div className="article__recent-title">
                    <h3>Dernier sujet digital</h3>
                </div>
                <div className="article__title">
                    <div className="article__title-info">
                        <p>{author.name}</p>
                        <div className="category-style"><h4>{category.name}</h4></div>
                    </div>
                    <h2>{recentTag.title.rendered}</h2>
                </div>
            </Recent__card>
        </Link>

    )
}

export default connect(recent);

const Recent__card = styled.article`
    margin: 30px;
    background-size: cover;
    background-position: center;
    min-height: 400px;
    border-radius: 15px;
    box-shadow: 0px 6px 25px rgba(0,0,0,0.09);
    display: flex;
    flex-wrap: wrap;
    .article__title {
        background-color: #fff;
        padding: 10px 30px;
        align-self: flex-end;
        border-radius: 0px 0px 15px 15px;
        h2 {
            font-size: 1.1em;
        }
    }
    .article__recent-title {
        padding: 10px 30px;
        h3 {
            color: #fff!important;
        }
    }
    /* Catégorie */
    .article__title-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.7em;
        .category-style {
            h4 {
                color: #FDA05A!important;
            }
        }
    }
`