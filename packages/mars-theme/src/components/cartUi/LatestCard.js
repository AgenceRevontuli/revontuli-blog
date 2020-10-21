import React from 'react';
import { connect, styled, decode } from "frontity";
import Link from "../link";

const LatestCard = ({state, item}) => {
    const author = state.source.author[item.author];
    const date = new Date(item.date);
    const category = state.source.category[item.categories];

    console.log(author)

    console.log(category)

    return (
        <CartMinimal>
                <Link link={item.link}>
                    {/* Récupération de la date */}
                    <PublishDate>
                        {" "}
                        <b>{date.toLocaleDateString()}</b>
                    </PublishDate>
                    {/* Titre de la carte */}
                     <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
                </Link>

                <Link>
                    <Category>
                        {" "}
                        <b>{category.name}</b>
                    </Category>
                </Link>

                {/* Récupération de l'auteur */}
                {author && (
                <StyledLink link={author.link}>
                    <AuthorName>
                    par <b>{author.name}</b>
                    </AuthorName>
                </StyledLink>
                )}
                {/* Récupération de l'extrait de l'article */}
                {item.excerpt && (
                    <Excerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
                )}
        </CartMinimal>
    )
}

export default connect(LatestCard);

const CartMinimal = styled.div`
    color: #2a343c;
    position: relative;
    padding: 20px;
    background-color: rgba(0,0,0,0.03);
    margin: 15px;
    border-radius: 5px;
    box-shadow: 0px 6px 15px rgba(0,0,0,0.11);
`;

const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: 300;
  padding-top: 40px; 
  padding-bottom: 15px;
  color: rgba(12, 17, 43);
  margin: 0;
  box-sizing: border-box;
`;

const PublishDate = styled.span`
  color: rgba(12, 17, 43, 0.4);
  font-size: 0.7em;
  padding: 5px;
  border: 1px solid rgba(12, 17, 43, 0.2);
  border-radius: 5px;
`;

const AuthorName = styled.span`
  color: rgba(12, 17, 43, 0.7);
  font-size: 0.7em;
`;

const StyledLink = styled(Link)`
  padding: 15px 0;
`;

const Excerpt = styled.div`
  font-size: 0.9em;
  line-height: 1.6em;
  color: rgba(12, 17, 43, 0.8);
`;

const Category = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 0.8em;
    background-color: #f5a329;
    padding: 5px;
    color: #fff;
    border-radius: 5px;

`;