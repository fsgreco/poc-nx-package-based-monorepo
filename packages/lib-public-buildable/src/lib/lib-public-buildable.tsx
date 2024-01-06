import styled from 'styled-components';

/* eslint-disable-next-line */
export interface LibPublicBuildableProps {}

const StyledLibPublicBuildable = styled.div`
  color: pink;
`;

export function LibPublicBuildable(props: LibPublicBuildableProps) {
  return (
    <StyledLibPublicBuildable>
      <h1>Welcome to LibPublicBuildable!</h1>
    </StyledLibPublicBuildable>
  );
}

export default LibPublicBuildable;
