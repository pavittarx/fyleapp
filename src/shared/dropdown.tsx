import React, { useState } from "react";
import styled from "styled-components";
import framer from "framer-motion";

type Dialog = {
  list: Array<string>;
  set: Function;
  close: Function;
};

type Dropdown = {
  current: string;
  list: Array<string>;
  set: Function;
};

const Dropdown = {
  Wrapper: styled.section`
    max-width: 10rem;

    .button {
      padding: 0.5rem 1.5rem;
      border: 1px solid #222222af;
      border-radius: 50px;

      cursor: default;
    }
  `,
  Dialog: styled.section`
    position: absolute;
    z-index: 9;

    background: #f0f0f0dc;

    height: 100vh;
    width: 100vw;

    top: 0;
    bottom: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .dialog {
      position: relative;
      margin: 0 auto;

      max-width: 30rem;
      min-width: 20rem;

      background: #fff;
      border: 0;
      border-radius: 20px;
      overflow: hidden;

      .header{
        background: #fff;
        padding: 1rem 1.5rem;
        border-bottom: 1px solid #777777cc;
        font-weight: 700;
      }

      .list-item{
        padding: 1rem 3rem;
        padding-left: 1.5rem;
        border-bottom: 1px solid #d0d0d0;
        cursor: default;
    }
  `,
};

const SelectionDialog = ({ list, set, close }: Dialog) => {
  return (
    <Dropdown.Dialog>
      <div className="dialog">
        <div className="header">Choose</div>

        {list &&
          list.map((value, index) => {
            return (
              <div
                className="list-item"
                key={index}
                onClick={() => {
                  set(value);
                  close();
                }}
              >
                {value}
              </div>
            );
          })}
      </div>
    </Dropdown.Dialog>
  );
};

export default ({ list, current, set }: Dropdown) => {
  const [open, setOpen] = useState(false);

  return (
    <Dropdown.Wrapper>
      <div className="button" onClick={() => setOpen(true)}> {current} </div>
      {open ? (
        <SelectionDialog
          list={list}
          set={set}
          close={() => {
            console.log("Executing Close", open);
            setOpen(false);
          }}
        />
      ) : null}
    </Dropdown.Wrapper>
  );
};