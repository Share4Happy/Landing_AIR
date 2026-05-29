'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function Chatbot() {
  useEffect(() => {
    if (window.CozeWebSDK) {
      new CozeWebSDK.WebChatClient({
        config: {
          bot_id: '7363685797356519432',
        },
        componentProps: {
          title: 'Trợ lý nhỏ LHU',
        },
      });
    }
  }, []);

  return (
    <div className="chat-container">
      <div id="chatbox">
      </div>
      <Script
        src="https://sf-cdn.coze.com/obj/unpkg-va/flow-platform/chat-app-sdk/0.1.0-beta.5/libs/oversea/index.js"
        strategy="afterInteractive"
        onLoad={() => {
          new CozeWebSDK.WebChatClient({
            config: {
              bot_id: '7363685797356519432',
            },
            componentProps: {
              title: 'Hỗ trợ tư vấn AI Robotic',
            },
          });
        }}
      />
    </div>
  );
}