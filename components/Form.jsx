import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform.
      </p>
      <form
        className="my-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
        onSubmit={handleSubmit}
      >
        <label htmlFor="prompt">
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI Prompt
          </span>
          <textarea
            id="prompt"
            value={post.prompt}
            className="form_textarea"
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your prompt here..."
            required
          />
        </label>

        <label htmlFor="tag">
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Add Tag {' '}
            <span className="font-normal">
              (#product, #webdevelopment, #idea)
            </span>
          </span>
          <input
            id="tag"
            type="text"
            value={post.tag}
            className="form_input"
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="#tag"
            required
          />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button 
          type="submit"
          className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          disabled={submitting}
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
