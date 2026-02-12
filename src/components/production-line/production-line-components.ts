import styled from "@emotion/styled";
import { isIpad, isMobile } from "../../bowser";
import { ActionButton } from "../form-elements/form-elements";
import {
  DisplayContainer,
  FlexContainer,
  mediaQueries,
} from "../generic-components";
import {
  CollapsibleItemWrapper,
  HeaderWrapper,
} from "../shared/shared-components";
import {
  accentColour,
  successColour,
  successLightColour,
  errorColour,
  errorLightColour,
  cardGradient,
  cardShadow,
  backgroundAltColour,
} from "../../css-helpers/defaults";

export const CallInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export const ButtonIcon = styled.div`
  width: 3rem;
  display: inline-block;
  vertical-align: middle;
  margin: 0 auto;

  &.mute {
    svg {
      display: block;
      margin: auto;
      fill: ${errorLightColour};
    }
  }

  &.unmuted {
    svg {
      display: block;
      margin: auto;
      fill: ${successLightColour};
    }
  }
`;

export const UserControlBtn = styled(ActionButton)`
  background: rgba(52, 152, 219, 0.1);
  border: 0.2rem solid rgba(52, 152, 219, 0.3);
  width: 100%;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: rgba(52, 152, 219, 0.2);
    border-color: ${accentColour};
  }

  &:disabled {
    background: rgba(52, 152, 219, 0.05);
    opacity: 0.5;
  }

  svg {
    width: 2rem;
  }
`;

export const LongPressWrapper = styled.div`
  touch-action: none;
`;

export const PTTWrapper = styled(LongPressWrapper)`
  width: 100%;
  button {
    padding: 1rem;
    line-height: 2rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ListWrapper = styled(DisplayContainer)<{
  isProgramUser?: boolean;
  isProgramLine?: boolean;
}>`
  width: 100%;
  padding: 0;
  margin-top: ${({ isProgramUser, isProgramLine }) =>
    isProgramUser && isProgramLine ? "1rem" : "0"};
`;

export const ConnectionErrorWrapper = styled(FlexContainer)`
  width: 100vw;
  justify-content: center;
  align-items: center;
  padding-top: 12rem;
`;

export const AudioFeedIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${accentColour};
  font-size: 1.2rem;
  gap: 1rem;
  position: absolute;
  top: ${({ open }: { open: boolean }) => (open ? "5rem" : "2.35rem")};
  left: ${({ open }: { open: boolean }) => (open ? "2rem" : "1.5rem")};

  svg {
    fill: ${accentColour} !important;
    width: 1.5rem !important;
  }
`;

export const DeviceButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    margin: 0;
  }

  .save-button {
    margin-left: 1rem;
  }
`;

export const LoaderWrapper = styled.div`
  margin-top: 2rem;
  width: 2rem;
  height: 2rem;
`;

export const CallWrapper = styled.div<{ isSomeoneSpeaking: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 0 2rem 0;
  flex: 0 0 calc(25% - 2rem);
  ${isMobile ? `flex-grow: 1;` : `flex-grow: 0;`}
  min-width: 35rem;
  max-width: 49rem;
  background-color: transparent;
  border-radius: 0.8rem;
  animation: ${({ isSomeoneSpeaking }) =>
    isSomeoneSpeaking ? "pulsate 1.5s ease-in-out infinite" : "none"};

  @keyframes pulsate {
    0% {
      background-color: transparent;
    }
    50% {
      background-color: rgba(52, 152, 219, 0.15);
    }
    100% {
      background-color: transparent;
    }
  }

  ${mediaQueries.isLargeScreen} {
    flex: 0 0 calc(33.333% - 2rem);
  }

  ${mediaQueries.isMediumScreen} {
    flex: 0 0 calc(50% - 2rem);
  }

  ${mediaQueries.isSmallScreen} {
    flex: 0 0 calc(100%);
  }
`;

export const CallContainer = styled(CollapsibleItemWrapper)<{
  isProgramLine?: boolean;
}>`
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;

  background: ${({ isProgramLine }) =>
    isProgramLine ? "linear-gradient(145deg, rgba(15, 52, 96, 0.8) 0%, rgba(52, 152, 219, 0.2) 100%)" : cardGradient};
`;

export const CallHeader = styled(HeaderWrapper)`
  position: relative;
  margin-bottom: ${({ open }: { open: boolean }) =>
    open && (isMobile || isIpad) ? "2rem" : ""};
`;

export const MinifiedControls = styled.div`
  padding: 0 2rem 2rem 2rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  align-items: center;
  button {
    margin: 0;
  }
`;

export const MinifiedControlsBlock = styled.div`
  flex-grow: 1;
  display: flex;
  gap: 1rem;
`;

export const MinifiedControlsButton = styled(UserControlBtn)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
  line-height: 2rem;

  &.off {
    svg {
      fill: ${errorLightColour};
    }
  }

  &.on {
    svg {
      fill: ${successLightColour};
    }
  }
`;

export const UrlButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
