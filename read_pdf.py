import PyPDF2
import sys

def extract_text(pdf_path):
    try:
        reader = PyPDF2.PdfReader(pdf_path)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n"
        return text
    except Exception as e:
        return str(e)

if __name__ == "__main__":
    if len(sys.argv) > 1:
        text = extract_text(sys.argv[1])
        with open(sys.argv[1] + ".txt", "w", encoding="utf-8") as f:
            f.write(text)
        print(f"Extracted to {sys.argv[1]}.txt")
