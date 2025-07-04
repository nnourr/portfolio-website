import Blog from './Blog';
import Section from './Section';

function BlogPost() {
  return (
    <Blog>
      <Section title="Welcome to My Blog">
        <div className="flex flex-col gap-4 font-sans text-base">
          <p>
            This is a demonstration of the blog functionality. The Blog
            component uses the same background and styling as the main portfolio
            site.
          </p>
          <p>
            You can navigate back to the main portfolio using the navigation bar
            on the right side of the screen.
          </p>
          <p>
            This blog section is perfect for sharing technical articles, project
            deep-dives, or any other content you'd like to showcase.
          </p>
        </div>
      </Section>
    </Blog>
  );
}

export default BlogPost;
