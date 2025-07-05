import Section from '../../components/Section';

function BlogPost2() {
  return (
    <Section title="Building Scalable React Applications">
      <div className="flex flex-col gap-4 font-sans text-base">
        <p>
          This is another sample blog post demonstrating the nested routing
          structure. Each blog post is a separate component that gets rendered
          within the Blog layout.
        </p>

        <h3 className="mt-4 text-lg font-bold">Key Principles</h3>
        <ul className="list-inside list-disc space-y-2">
          <li>Component composition over inheritance</li>
          <li>Proper state management with hooks</li>
          <li>Performance optimization techniques</li>
          <li>Testing strategies for React applications</li>
        </ul>

        <p className="mt-4">
          The Blog component acts as a layout wrapper, providing consistent
          styling and navigation across all blog posts, just like Next.js layout
          patterns.
        </p>
      </div>
    </Section>
  );
}

export default BlogPost2;
