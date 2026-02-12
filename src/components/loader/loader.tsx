import styled from "@emotion/styled";
import { FC, useEffect, useState } from "react";
import { accentColour, backgroundColour } from "../../css-helpers/defaults";

const Loading = styled.div`
  border: 0.3rem solid rgba(52, 152, 219, 0.2);
  border-top: 0.3rem solid ${accentColour};
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  animation: spin 1s linear infinite;
  margin: auto;

  &.create-production {
    position: absolute;
    top: 0.5rem;
    left: 40%;
  }

  &.manage-production {
    position: absolute;
    top: 0.5rem;
    left: 30%;
  }

  &.join-production {
    border: 0.4rem solid rgba(52, 152, 219, 0.2);
    border-top: 0.4rem solid ${accentColour};
  }

  &.form-loader {
    position: absolute;
    top: 0.5rem;
    right: 1rem;
    width: 1.8rem;
    height: 1.8rem;
    border: 0.4rem solid rgba(52, 152, 219, 0.2);
    border-top: 0.4rem solid ${accentColour};
  }

  &.companion-loader {
    width: 1.8rem;
    height: 1.8rem;
  }

  &.production-list {
    height: 2rem;
    width: 2rem;
  }

  &.copy-button {
    height: 2rem;
    width: 2rem;
  }

  &.name-edit-button {
    height: 100%;
    width: 100%;
  }

  &.production-name {
    border: 0.3rem solid rgba(52, 152, 219, 0.3);
    border-top: 0.3rem solid ${accentColour};
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @-webkit-keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @-moz-keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Text = styled.span`
  padding-left: 2rem;
  font-size: 1.8rem;
  &.active {
    color: rgba(255, 255, 255, 0.8);
  }
  &.in-active {
    color: ${backgroundColour};
  }
`;

const Dots = styled.span`
  padding-left: 0.2rem;
  width: 2rem;
  font-size: 2rem;
  transform: translateY(-50%);
  &.active {
    color: ${accentColour};
  }
  &.in-active {
    color: ${backgroundColour};
  }
`;

type TSpinner = { className: string };

type TLoaderDots = { className: string; text?: string };

export const Spinner: FC<TSpinner> = ({ className }: TSpinner) => {
  return <Loading className={className} />;
};

export const LoaderDots: FC<TLoaderDots> = ({
  className,
  text,
}: TLoaderDots) => {
  const [dots, setDots] = useState<string>(".");

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setDots((prevDots) => (prevDots.length > 2 ? "." : `${prevDots}.`));
    }, 300);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      {text && <Text className={className}>{text}</Text>}
      <Dots className={className}>{dots}</Dots>
    </div>
  );
};
