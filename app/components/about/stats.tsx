
import { Chip } from "@/app/utils/Chip"
import Reveal from "@/app/utils/Reveal"
import { AiFillApple,AiFillAndroid} from "react-icons/ai"

const Stats = () => {
  return (
    <div className="relative">
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillApple className="text-indigo-500 text-2xl" />
            <span className="font-bold ml-2 text-white">Use at work</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12 text-white">
            <Chip>JavaScript</Chip>
            <Chip>TypeScript</Chip>
            <Chip>HTML</Chip>
            <Chip>CSS</Chip>
            <Chip>React</Chip>
            <Chip>Redux</Chip>
            <Chip>NodeJS</Chip>
            <Chip>Express</Chip>
            <Chip>Postgres</Chip>
            <Chip>MongoDB</Chip>
            <Chip>GitHub</Chip>
            <Chip>Jira</Chip>
            <Chip>Heroku</Chip>
            <Chip>AWS</Chip>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillAndroid className="text-indigo-500 text-2xl" />
            <span className="font-bold ml-2 text-white">Use for fun</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12 text-white">
            <Chip>Rust</Chip>
            <Chip>Tailwind</Chip>
            <Chip>Java</Chip>
            <Chip>Spring</Chip>
            <Chip>Figma</Chip>
            <Chip>Whimsical</Chip>
            <Chip>Planetscale</Chip>
            <Chip>GraphQL</Chip>
            <Chip>Python</Chip>
            <Chip>FastAPI</Chip>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default Stats