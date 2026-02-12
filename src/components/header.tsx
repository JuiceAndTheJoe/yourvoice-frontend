import styled from "@emotion/styled";
import { FC, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HeadsetIcon } from "../assets/icons/icon.tsx";
import { accentColour, headerGradient } from "../css-helpers/defaults.ts";
import { useGlobalState } from "../global-state/context-provider.tsx";
import { useAudioCue } from "./production-line/use-audio-cue.ts";
import { ConfirmationModal } from "./verify-decision/confirmation-modal.tsx";

const HeaderWrapper = styled.div`
  width: 100%;
  background: ${headerGradient};
  margin: 0 0 1rem 0;
  border-bottom: 1px solid rgba(52, 152, 219, 0.2);
`;

const HomeButton = styled.button`
  background: transparent;
  border: none;
  padding: 1rem;
  display: flex;
  align-items: center;
  width: fit-content;
  font-size: 3rem;
  font-weight: 600;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.95);
  transition: all 0.2s ease;

  &:hover {
    color: ${accentColour};
  }

  svg {
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 1rem;
    margin-left: 1rem;
    fill: ${accentColour};
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`;

export const Header: FC = () => {
  const [confirmExitModalOpen, setConfirmExitModalOpen] = useState(false);
  const [{ calls }, dispatch] = useGlobalState();
  const navigate = useNavigate();
  const location = useLocation();
  const { playExitSound } = useAudioCue();
  const isEmpty = Object.values(calls).length === 0;

  const runExitAllCalls = () => {
    setConfirmExitModalOpen(false);
    navigate("/");
    playExitSound();
    if (!isEmpty) {
      Object.entries(calls).forEach(([callId]) => {
        if (callId) {
          dispatch({
            type: "REMOVE_CALL",
            payload: { id: callId },
          });
        }
      });
    }
  };

  const returnToRoot = () => {
    if (location.pathname.includes("/line") && isEmpty) {
      runExitAllCalls();
    } else if (location.pathname.includes("/line")) {
      setConfirmExitModalOpen(true);
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <HeaderWrapper>
        <HomeButton onClick={returnToRoot}>
          <HeadsetIcon />
          YourVoice
        </HomeButton>
      </HeaderWrapper>
      {confirmExitModalOpen && (
        <ConfirmationModal
          title="Confirm"
          description="Are you sure you want to leave all calls?"
          confirmationText="This will leave all calls and return to the home page."
          onCancel={() => setConfirmExitModalOpen(false)}
          onConfirm={runExitAllCalls}
        />
      )}
    </>
  );
};
