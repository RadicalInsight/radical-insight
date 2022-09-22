import { Heading, List, P } from "../../components/typography";

/* eslint-disable react/no-unescaped-entities */
import { Button } from "../../components/input";
import { FlexRow } from "../../components/layout/flex-row";
import { Form } from "../../components/input/form";
import { InternalLink } from "../../components/typography/link";

export const TestPage = () => {
  return (
    <>
      <Heading level={1}>Testing display of HTML elements</Heading>
      <P>
        This page contains a bunch of HTML Elements and text. You can copy the
        source code and use it test out various CSS Properties. For testing
        purposes, you may use{" "}
        <a href="http://web.simmons.edu/~grovesd/comm244/notes/week3/css-linking#internal">
          <dfn>internal styles</dfn>
        </a>
        .
      </P>

      <Heading level={1}>This is 1st level heading</Heading>
      <P>This is a test paragraph.</P>
      <Heading level={2}>This is 2nd level heading</Heading>
      <P>This is a test paragraph.</P>
      <Heading level={3}>This is 3rd level heading</Heading>
      <P>This is a test paragraph.</P>
      <Heading level={4}>This is 4th level heading</Heading>
      <P>This is a test paragraph.</P>
      <Heading level={5}>This is 5th level heading</Heading>
      <P>This is a test paragraph.</P>
      <Heading level={6}>This is 6th level heading</Heading>
      <P>This is a test paragraph.</P>

      <Heading level={2}>Basic block level elements</Heading>
      <P>
        This is a normal paragraph (<code>p</code> element). To add some length
        to it, let us mention that this page was primarily written for testing
        the effect of <strong>user style sheets</strong>. You can use it for
        various other purposes as well, like just checking how your browser
        displays various HTML elements.
      </P>
      <P>
        This is another paragraph.{" "}
        <mark>
          I think it needs to be added that the set of elements tested is not
          exhaustive in any sense.
        </mark>{" "}
        I have selected those elements for which it can make sense to write user
        style sheet rules, in my opinion.
      </P>
      <div>
        This is a <code>div</code> element. Authors may use such elements
        instead of paragraph markup for various reasons. (End of{" "}
        <code>div</code>.)
      </div>
      <blockquote>
        <P>
          This is a <i>block quotation</i> containing a single paragraph. Well,
          not quite, since this is not <em>really</em> quoted text, but I hope
          you understand the point. After all, this page does not use HTML
          markup very normally anyway.
        </P>
      </blockquote>
      <P>The following contains links to the home page</P>
      <P>
        <InternalLink href="/home">To the home page.</InternalLink>
      </P>

      <Heading level={2}>Lists</Heading>
      <P>
        This is a paragraph before an <strong>unordered</strong> list (
        <code>ul</code>). Note that the spacing between a paragraph and a list
        before or after that is hard to tune in a user style sheet. You can't
        guess which paragraphs are logically related to a list, e.g. as a "list
        header".
      </P>
      <List
        items={[
          "One.",
          "Two.",
          "Three. Well, probably this list item should be longer. Note that for short items lists look better if they are compactly presented, whereas for long items, it would be better to have more vertical spacing between items.",
          "Four. This is the last item in this list. Let us terminate the list now without making any more fuss about it.",
        ]}
      />

      <P>
        This is a paragraph before a <strong>ordered</strong> list (
        <code>ol</code>). Note that the spacing between a paragraph and a list
        before or after that is hard to tune in a user style sheet. You can't
        guess which paragraphs are logically related to a list, e.g. as a "list
        header".
      </P>

      <List
        items={[
          "One.",
          "Two.",
          "Three. Well, probably this list item should be longer. Note that for short items lists look better if they are compactly presented, whereas for long items, it would be better to have more vertical spacing between items.",
          "Four. This is the last item in this list. Let us terminate the list now without making any more fuss about it.",
        ]}
        ordered
      />

      <p>
        This is a paragraph before a <strong>definition</strong> list (
        <code>dl</code>). In principle, such a list should consist of{" "}
        <em>terms</em> and associated definitions. But many authors use{" "}
        <code>dl</code> elements for fancy "layout" things. Usually the effect
        is not <em>too</em> bad, if you design user style sheet rules for{" "}
        <code>dl</code> which are suitable for real definition lists.
      </p>

      <dl>
        <dt> recursion </dt>
        <dt></dt>
        <dd> see recursion </dd>
        <dt> recursion, indirect</dt>
        <dd> see indirect recursion</dd>
        <dt> indirect recursion</dt>
        <dd> see recursion, indirect</dd>
        <dt> term</dt>
        <dd>
          {" "}
          a word or other expression taken into specific use in a well-defined
          meaning, which is often defined rather rigorously, even formally, and
          may differ quite a lot from an everyday meaning
        </dd>
      </dl>

      <Heading level={2}>Inputs</Heading>
      <P>
        Here are the various use input elements to be used throughout the
        application.
      </P>

      <Heading level={3}>Buttons</Heading>
      <FlexRow>
        <Button primary>Primary Button</Button>
        <Button secondary>Secondary Button</Button>
        <Button>Default Button</Button>
        <Button disabled>Disabled Button</Button>
      </FlexRow>

      <Heading level={3}>Fields</Heading>
      <Form
        heading="The Test Form"
        onSubmit={(data) => console.log(data)}
        submitText="Go, go, go!"
        fields={[
          {
            label: "text field with placeholder value",
            placeholder: "placeholder text",
            name: "placeholder",
            required: true,
          },
          {
            label: "password field",
            placeholder: "password",
            type: "password",
            name: "password",
          },
          {
            label: "email field",
            placeholder: "email address",
            type: "email",
            name: "email",
          },
          {
            label: "custom validation",
            placeholder: "only numbers allowed",
            name: "validator",
            customValidator: (v) => /^\d+$/.test(String(v)),
          },
        ]}
      />
    </>
  );
};
