import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedMedia from "../featured-media";

/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const Item = ({ state, item }) => {
  const author = state.source.author[item.author];
  const date = new Date(item.date);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <article className="article--container">
      <Link link={item.link}>
        <ImagePost>
                {/*
                  * If the want to show featured media in the
                  * list of featured posts, we render the media.
                  */}
                  {state.theme.featured.showOnList && (
                    <FeaturedMedia id={item.featured_media} />
                  )}
        </ImagePost>
      </Link>


      <ArticleContent>
        <Link link={item.link}>
          <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
        </Link>

        <div>
          <PublishDate>
            {date.toLocaleDateString(undefined, options)}
          </PublishDate>
        </div>

        {/* If the post has an excerpt (short summary text), we render it */}
        {item.excerpt && (
          <Excerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
        )}

      </ArticleContent>


    </article>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
  padding-top: 24px;
  padding-bottom: 8px;
  box-sizing: border-box;
`;

const AuthorName = styled.span`
  font-size: 0.9em;
`;

const StyledLink = styled(Link)`
  padding: 15px 0;
`;

const PublishDate = styled.span`
  font-size: 0.9em;
  color: rgba(0,0,0,0.25);
`;

const Excerpt = styled.div`
  line-height: 1.6em;
`;

const ImagePost = styled.div`
  img {
    border-radius:10px;
  }
`;

const ArticleContent = styled.div`

`;
