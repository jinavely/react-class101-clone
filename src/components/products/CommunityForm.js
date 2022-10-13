import styled from 'styled-components';
import { ReactComponent as SendIcon } from '../../assets/products/svg_send.svg';

export function CommunityForm() {
  return (
    <Fieldset>
      <Legend>댓글입력</Legend>
      <AddFile>
        <Image
          src="https://class101.net/images/ic-new-file-input-button.png"
          alt=""
        />
      </AddFile>
      <Textarea placeholder="댓글을 입력해주세요." />
      <SendButton>
        <SendIcon />
      </SendButton>
    </Fieldset>
  );
}

const Fieldset = styled.fieldset`
  margin: 20px 0 0 0;
  position: relative;
  display: block;
  border-radius: 25px;
  padding: 0px 10px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(229, 229, 229);
  display: flex;
  align-items: center;
`;
const Legend = styled.legend`
  position: absolute;
  left: -9999px;
  font-size: 0;
  opacity: 0;
`;
const AddFile = styled.span`
  display: inline-block;
  width: 28px;
  height: 28px;
`;
const Textarea = styled.textarea`
  font-size: 14px;
  font-weight: normal;
  color: rgb(26, 26, 26);
  letter-spacing: -0.15px;
  width: 100%;
  height: 44px;
  overflow: hidden;
  padding: 12px 10px 8px;
  outline: none;
  border: none;
  background-color: transparent;
  resize: none;
`;
const SendButton = styled.button``;
const Image = styled.img`
  max-height: 100%;
  object-fit: cover;
`;
