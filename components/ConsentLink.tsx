'use client';

export default function ConsentLink() {
  return (
    <button type="button" className="linkbtn ulink" onClick={() => window.dispatchEvent(new Event('open-consent'))}>
      Cookies
    </button>
  );
}
