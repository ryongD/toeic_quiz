import React, { useState, useRef, useEffect } from "react";
import { dictionary } from "@/data/dictionary";

interface Props {
  text: string;
  enablePopup?: boolean; // 여기 추가
}

const WordWithMeaning: React.FC<Props> = ({ text, enablePopup = true }) => {
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({});
  const tooltipRef = useRef<HTMLDivElement>(null);

  // 팝업 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node)
      ) {
        setSelectedWord(null);
      }
    };

    if (selectedWord) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [selectedWord]);

  const handleClick = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    word: string,
    clean: string
  ) => {
    e.stopPropagation(); // 다른 리스너에 이벤트 전파 방지

    if (selectedWord === clean) {
      setSelectedWord(null);
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();

    setTooltipStyle({
      position: "fixed",
      top: rect.top - 35,
      left: rect.left,
      zIndex: 9999,
    });

    setSelectedWord(clean);
  };

  return (
    <div className="relative whitespace-pre-line leading-relaxed text-gray-800 text-sm">
      {text.split("\n").map((line, lineIdx) => (
        <span key={lineIdx}>
          {line.split(/(\s+)/).map((word, idx) => {
            if (word.trim() === "") return word;

            const clean = word.toLowerCase().replace(/[^a-zA-Z]/g, "");
            const hasMeaning = dictionary[clean];

            return (
              <span
                key={idx}
                onClick={(e) => hasMeaning && handleClick(e, word, clean)}
                className="cursor-pointer relative"
              >
                {word}
              </span>
            );
          })}
          <br />
        </span>
      ))}

      {selectedWord && dictionary[selectedWord] && (
        <div
          ref={tooltipRef}
          style={tooltipStyle}
          className="z-50 bg-white text-gray-700 border border-gray-300 rounded-md shadow px-3 py-1 text-xs font-normal"
        >
          <strong>{selectedWord}</strong>: {dictionary[selectedWord].join(", ")}
        </div>
      )}
    </div>
  );
};

export default WordWithMeaning;
