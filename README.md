# Ebook_to_PDF

Ebook to PDF is an open-source Python program designed to automate the conversion of ebooks into PDF format. It works by taking screenshots of each page of the ebook, saving them as PNG files, and then merging these images into a single PDF file. This tool is especially useful for users looking to convert ebooks for easier accessibility or for reading on devices that do not support common ebook formats.

## Features

- **Automated Screenshot Capture:** Navigate through each ebook page and capture screenshots automatically.
- **PNG to PDF Conversion:** Seamlessly merges captured images into a single PDF document.
- **Customizable Settings:** Users can adjust capture settings, including page intervals and output resolution.
- **Windows Compatibility:** Designed to run on Windows operating systems, leveraging the PyQt5 framework for its GUI.

## Getting Started

### Running the Executable

For Windows users, a standalone executable version is available, eliminating the need for manual Python or dependency installations. This makes the tool accessible to a broader audience, including those who may not be familiar with Python environments.

1. **Download the Executable:** The latest version of the Ebook to PDF executable can be found in the Releases section of this GitHub repository.
2. **Extract the Zip File:** After downloading, extract the contents of the zip file to your desired location.
3. **Launch the Application:** Open the extracted folder and run the `Ebook_to_PDF.exe` file to start the program.

### Usage Guide

1. **Set Page Count:** Indicate how many pages you wish to convert. This sets the scope of the conversion process.
2. **Capture Page Coordinates:** Use the GUI to define the top-left and bottom-right coordinates of the ebook pages. These coordinates determine the area of the screen to capture.
3. **Set Next Page Button:** Specify the location of the "next page" button or area to automate page turning during capture.
4. **Start Conversion:** Initiate the screenshot capture process. The program will automatically progress through each page, capturing and compiling the images into a PDF.
5. **Convert to PDF:** After capturing all pages, use the provided option to merge these images into a single PDF file.
   
사용법: https://infinitt.tistory.com/291
