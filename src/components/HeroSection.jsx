import React, { useState } from "react";
import API from "../api";

export default function HeroSection() {
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [output, setOutput] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [textInput, setTextInput] = useState("");
  const [lastUploadedFile, setLastUploadedFile] = useState(null);
  const [uploadedFileName, setUploadedFileName] = useState("");

  const formatResult = (data) => {
    if (!data) return "";
    if (typeof data === "string") return data;
    if (data.result) return data.result;
    return JSON.stringify(data, null, 2);
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLastUploadedFile(file);
    setUploadedFileName(file.name);

    const ext = file.name.split(".").pop().toLowerCase();
    const isPDF = ext === "pdf";
    const isAudio = ["mp3", "wav", "m4a", "aac", "ogg"].includes(ext);

    if (!isPDF && !isAudio) {
      alert("Please upload a PDF or Audio file.");
      return;
    }

    const fd = new FormData();
    fd.append("file", file);
    const endpoint = isPDF ? "/summarize/pdf" : "/summarize/audio";

    try {
      setLoading(true);
      const res = await API.post(endpoint, fd);
      setOutput(formatResult(res.data));
    } finally {
      setLoading(false);
    }
  };

  const handleSummarize = async () => {
    try {
      setLoading(true);

      if (youtubeUrl.trim().length > 5) {
        const fd = new FormData();
        fd.append("url", youtubeUrl);
        fd.append("tone", "neutral");

        const res = await API.post("/summarize/youtube-audio", fd);
        setOutput(formatResult(res.data));
        return;
      }

      if (textInput.trim().length > 5) {
        const fd = new FormData();
        fd.append("text", textInput);

        const res = await API.post("/summarize/text", fd);
        setOutput(formatResult(res.data));
        return;
      }

      if (lastUploadedFile) {
        const file = lastUploadedFile;
        const ext = file.name.split(".").pop().toLowerCase();
        const isPDF = ext === "pdf";
        const endpoint = isPDF ? "/summarize/pdf" : "/summarize/audio";

        const fd = new FormData();
        fd.append("file", file);

        const res = await API.post(endpoint, fd);
        setOutput(formatResult(res.data));
        return;
      }

      alert("Please upload a file, paste a YouTube URL, or type text.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-10 px-6 lg:px-20 xl:px-32">
      <h2 className="text-center text-lg sm:text-xl text-primary font-semibold mb-6">
        Upload a PDF, video or audio to summarize ✨
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-card p-6 rounded-xl shadow-md border border-card">
          <div
            className="space-y-4"
            onDragOver={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            onDrop={(e) => {
              e.preventDefault();
              const file = e.dataTransfer.files[0];
              if (file) {
                handleFileUpload({ target: { files: [file] } });
              }
            }}
            onPaste={(e) => {
              const file = e.clipboardData.files[0];
              if (file) {
                handleFileUpload({ target: { files: [file] } });
              }
            }}
          >
            <label
              htmlFor="realUploader"
              className="w-full bg-background border border-primary text-text py-3 rounded-lg hover:bg-card transition flex justify-center cursor-pointer"
            >
              Upload or Drop PDF / Audio
            </label>

            <input
              id="realUploader"
              type="file"
              accept="audio/*,.pdf"
              className="hidden"
              onChange={handleFileUpload}
            />

            {uploadedFileName && (
              <p className="text-xs text-accent mt-1">Uploaded: {uploadedFileName}</p>
            )}

            <input
              type="text"
              value={youtubeUrl}
              onChange={(e) => setYoutubeUrl(e.target.value)}
              placeholder="Paste YouTube link (auto audio download)"
              className="w-full bg-background border border-primary text-text py-3 px-3 rounded-lg focus:outline-none"
            />

            <textarea
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              placeholder="Copy & paste text here..."
              className="w-full bg-background border border-primary text-text h-32 p-3 rounded-lg focus:outline-none resize-none"
            ></textarea>
          </div>
        </div>

        <div className="lg:col-span-2 bg-card p-6 rounded-xl shadow-md border border-card">
          <div className="flex items-center justify-between mb-4">
            <select className="bg-background border border-primary text-text py-2 px-3 rounded-md">
              <option>Type</option>
              <option>Formal</option>
              <option>Casual</option>
              <option>Simple</option>
              <option>Exam-ready</option>
            </select>

            <button
              onClick={handleSummarize}
              className="bg-background border border-primary text-text py-2 px-4 rounded-md hover:bg-card transition"
            >
              Summarize
            </button>
          </div>

          <div className="relative">
            <div className="bg-background border border-primary h-72 p-4 rounded-lg overflow-y-auto text-sm text-text whitespace-pre-wrap text-left">
              {loading ? (
                <div className="w-full h-full flex justify-center items-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </div>
              ) : (
                <div
                  dangerouslySetInnerHTML={{
                    __html: (output || "Output will appear here...")
                      .replace(/^Title:/gm, "<strong>Title:</strong>")
                      .replace(/^Key Insights:/gm, "<strong>Key Insights:</strong>")
                      .replace(/^TLDR:/gm, "<strong>TLDR:</strong>")
                  }}
                ></div>
              )}

              {!loading && output && (
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(output);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 1200);
                  }}
                  className="absolute top-2 right-2 bg-background border border-primary text-text py-1 px-3 rounded-md hover:bg-card transition text-xs"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
