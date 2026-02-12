import styled from "@emotion/styled";
import {
  accentColour,
  accentLightColour,
  accentDarkColour,
  backgroundLightColour,
  borderAccentColour,
  errorColour,
  warningColour,
  darkText,
  buttonShadow,
  accentGradient,
} from "../../css-helpers/defaults";

export const FormContainer = styled.form``;

const sharedMargin = `margin: 0 0 2rem`;

export const FormInput = styled.input`
  width: 100%;
  font-size: 1.6rem;
  padding: 0.75rem;
  margin: 0 0 2rem;
  border: 0.1rem solid rgba(52, 152, 219, 0.3);
  border-radius: 0.5rem;
  background: rgba(52, 152, 219, 0.1);
  color: white;
  transition: all 0.2s ease;

  ${sharedMargin};

  &:focus {
    outline: none;
    border-color: ${borderAccentColour};
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &.additional-line {
    padding-right: 3.5rem;
  }

  &.with-loader {
    padding-right: 3.5rem;

    &::-webkit-inner-spin-button {
      appearance: none;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type="number"] {
      -moz-appearance: textfield;
    }
  }

  &.edit-name {
    margin: 0;
    font-size: 1.4rem;
    padding: 0.5rem;
    min-width: 0;
    max-width: 100%;

    &.device-label {
      font-size: 1.2rem;
    }
  }
`;

export const FormSelect = styled.select`
  width: 100%;
  font-size: 1.6rem;
  padding: 0.5rem;
  ${sharedMargin};
  border: 1px solid rgba(52, 152, 219, 0.3);
  border-radius: 0.5rem;
  background: rgba(52, 152, 219, 0.1);
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${borderAccentColour};
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }

  &.ingest {
    display: flex;
    align-items: center;
    margin: 0 1rem 0 0;
  }

  option {
    background: ${backgroundLightColour};
    color: white;
  }
`;

export const FormLabel = styled.label`
  display: block;
  input,
  select {
    font-size: 1.6rem;
    display: inline-block;
  }

  &.save-edit {
    margin-right: 1rem;
    flex: 1;
    min-width: 0;
    overflow: hidden;
  }
`;

export const DecorativeLabel = styled.span`
  display: block;
  white-space: nowrap;
  padding: 0 1rem 1rem 0;
  color: rgba(255, 255, 255, 0.7);
`;

export const StyledWarningMessage = styled.div`
  padding: 0.5rem;
  font-size: 1.6rem;
  background: ${warningColour};
  border-radius: 0.5rem;
  color: ${darkText};
  ${sharedMargin};
  border: 1px solid ${warningColour};
  display: flex;
  align-items: center;

  &.error-message {
    background: ${errorColour};
    border: 1px solid ${errorColour};
  }

  &.production-list {
    margin: 1rem 0;
  }
`;

export const ActionButton = styled.button`
  background: ${accentGradient};
  border: 0 solid transparent;
  border-radius: 0.5rem;
  box-sizing: border-box;
  color: white;
  column-gap: 1rem;
  cursor: pointer;
  display: flex;
  font-size: 100%;
  font-weight: 700;
  line-height: 2.4rem;
  margin: 0;
  outline: 0.2rem solid transparent;
  padding: 1rem 1.5rem;
  text-align: center;
  text-transform: none;
  transform: translateZ(0) scale(1);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  box-shadow: ${buttonShadow};

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, ${accentLightColour} 0%, ${accentColour} 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(52, 152, 219, 0.4);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 0 2px 10px rgba(52, 152, 219, 0.3);
  }

  &:disabled {
    background: ${accentGradient};
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.with-loader {
    position: relative;
    color: rgba(255, 255, 255, 0);
  }
`;

export const PrimaryButton = styled(ActionButton)`
  background: ${accentColour};

  &:hover:not(:disabled) {
    background: ${accentLightColour};
  }

  &:active:enabled {
    transform: translateY(0.125rem);
  }

  &:not(:disabled):hover:active {
    transform: translateY(0.125rem);
  }

  &:focus {
    outline: 0 solid transparent;
  }

  &:focus:before {
    content: "";
    left: calc(-1 * 0.375rem);
    pointer-events: none;
    position: absolute;
    top: calc(-1 * 0.375rem);
    transition: border-radius;
    user-select: none;
  }

  &:focus:not(:focus-visible) {
    outline: 0 solid transparent;
  }

  &:focus:not(:focus-visible):before {
    border-width: 0;
  }

  &:not(:disabled):active {
    transform: translateY(0.125rem);
  }

  &:disabled {
    background: rgba(52, 152, 219, 0.5);
  }
`;

export const SecondaryButton = styled(ActionButton)`
  background: transparent;
  border: 2px solid ${accentColour};
  color: ${accentColour};
  box-shadow: none;

  &:hover:not(:disabled) {
    background: rgba(52, 152, 219, 0.1);
    border-color: ${accentLightColour};
    color: ${accentLightColour};
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(52, 152, 219, 0.2);
  }

  &:before,
  &:after {
    border-radius: 0.5rem;
  }

  &:active:not(:disabled) {
    color: ${accentDarkColour};
    border-color: ${accentDarkColour};
    transform: translateY(0);
  }

  &:disabled {
    background: transparent;
    border-color: rgba(52, 152, 219, 0.3);
    color: rgba(52, 152, 219, 0.5);
  }
`;

export const SectionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.95);
`;

export const DevicesSection = styled.div`
  position: relative;
`;
