import React from 'react';
import { FcMindMap } from 'react-icons/fc';
import { SiOpenai } from 'react-icons/si';
import { FaGithubAlt } from 'react-icons/fa';
import { BiCodeBlock } from 'react-icons/bi';

export default function PageHeader() {
  return (
    <div className="header">
      <h1>
        <FcMindMap />
        <span>ImagineThis</span>
      </h1>
      <ul className="nav">
        <li>
          <a
            href="https://beta.openai.com/docs/guides/images"
            title="OpenAIDocs"
            target={'_blank'}
            rel="noreferrer"
          >
            <SiOpenai />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/IndieCoderMM/imagine-this"
            title="Source code"
            target={'_blank'}
            rel="noreferrer"
          >
            <BiCodeBlock />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/IndieCoderMM"
            title="IndieCoderMM"
            target={'_blank'}
            rel="noreferrer"
          >
            <FaGithubAlt />
          </a>
        </li>
      </ul>
    </div>
  );
}
