import React from "react";
import Messages from "../components/Messages/Messages";

export default function Main() {
  return (
    <div>
      <Messages message="hello" />
      <Messages
        message="ajsdioujjjjjjjjjjjjjjjjjjjjjjjjjjjjjiaowjdoiasjoidjaoiwdjoiawjdoiajwoidjawd"
        isMe
      />
      <Messages message="asjdiouajwddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaiowdjioawjdoiajwiodjaoiwdjoiawjdoiawjd" />
      <Messages message="hello" />
      <Messages
        message="ajsdioujjjjjjjjjjjjjjjjjjjjjjjjjjjjjiaowjdoiasjoidjaoiwdjoiawjdoiajwoidjawd"
        isMe
      />
      <Messages message="asjdiouajwddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaiowdjioawjdoiajwiodjaoiwdjoiawjdoiawjd" />
      <Messages message="awfawfffffffffawdawdo" />
      <Messages message="aasfasfawfidjaoiwdjoiawjdoiajwoidjawd" isMe />
      <Messages message="asjdiouajgsdgsdgoiajwiodjaoiwdjoiawjdoiawjd" />
      <Messages message="hello" isMe />
      <Messages message="ajsdi12412412eqdqwdqwdqwddjoiawjdoiajwoidjawd" isMe />
      <Messages
        message="asjdiouajdlkfglkdfjgoijwioejgfiowjeoifdaiowdjioawjdoiajwiodjaoiwdjoiawjdoiawjd"
        isMe
        isRead
      />
    </div>
  );
}
