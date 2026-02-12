import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { BackArrow } from "../../assets/icons/icon";
import { accentColour, accentLightColour } from "../../css-helpers/defaults";

const StyledBackBtn = styled.div`
  cursor: pointer;
  color: ${accentColour};
  background: transparent;
  padding: 0;
  margin: 0;
  width: 4rem;
  height: 4rem;
  transition: transform 0.2s ease;

  svg {
    fill: ${accentColour};
    transition: fill 0.2s ease;
  }

  &:hover {
    transform: scale(1.1);
    svg {
      fill: ${accentLightColour};
    }
  }
`;

export const NavigateToRootButton = ({
  onNavigate,
}: {
  onNavigate?: () => void;
}) => {
  const navigate = useNavigate();

  return (
    <StyledBackBtn
      onClick={() => {
        if (onNavigate) {
          onNavigate();
        } else {
          navigate("/");
        }
      }}
    >
      <BackArrow />
    </StyledBackBtn>
  );
};
