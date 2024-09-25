### **Lesson 3: Semantic Structure Tags - Classwork Assignment**

#### **Objective:**

Students will incorporate semantic structure tags to improve the organization, accessibility, and logical flow of the content. This classwork will demonstrate their understanding of semantic elements such as `<header>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<summary>`, and `<details>`.

---

### **Step-by-Step Instructions for Classwork:**

1. **Open Your Existing HTML File**:

   - Open the `index.html` file you created in **unit02-cw**.
   - You will now enhance this file by adding semantic HTML elements.

2. **Add a Page Header Using `<header>`**:

   - Inside the `<body>` tag and above the existing content, add a `<header>` section to contain the page’s logo (image will be added later in another lesson):
     ```html
     <header>
       <h1>Logo</h1>
     </header>
     ```

3. **Wrap the Main Content in a `<main>` Tag**:

   - Enclose the current content from **unit02-cw** inside a `<main>` tag, which is used to define the central content of the webpage. The `<main>` tag should contain the entire content section (headings, paragraphs, etc.):
     ```html
     <main>
       <h1>Welcome to My First Webpage</h1>
       <h2>About Me</h2>
       <p>
         My name is [Your Name], and I am learning how to create websites using
         HTML.
       </p>
       <hr />
       <div>
         <h3>My Hobbies</h3>
         <p>
           I enjoy <span style="color: blue;">coding</span>, reading books, and
           playing video games in my free time.
         </p>
         <p>
           I am also learning how to use different HTML tags.<br />It's fun and
           exciting!
         </p>
       </div>
     </main>
     ```

4. **Add a Collapsible Section Using `<summary>` and `<details>`**:

   - Inside the `<main>` tag, add a collapsible section with `<summary>` and `<details>` tags to reveal more information when clicked:
     ```html
     <details>
       <summary>More About Me</summary>
       <p>
         I started learning web development because I love creating and
         designing new things. It's a challenging but rewarding experience!
       </p>
     </details>
     ```

5. **Create an Aside Section for Related Information**:

   - After the closing `</main>` tag, add an `<aside>` to include related links or articles. This content should complement the main article without being central to the page:
     ```html
     <aside>
       <h3>Related Articles</h3>
       <p>Why Learn HTML?</p>
       <p>CSS for Beginners</p>
     </aside>
     ```

6. **Add a Footer Section**:

   - After the closing `</aside>`, add a `<footer>` section with your name, the current year, and a copyright notice:
     ```html
     <footer>
       <p>&copy; 2024 [Your Name]. All rights reserved.</p>
     </footer>
     ```

7. **Ensure Correct Page Structure with `<main>`**:

   - The `<main>` tag should wrap around the primary content of the page, while the `<aside>` holds supplementary content, and the `<footer>` is used for page-end information.
   - Ensure all sections are clearly organized to improve both the logical structure and accessibility of the page.

8. **Save and Preview Your Webpage**:

   - Save your `index.html` file.
   - Open it in a browser and ensure everything displays correctly. Verify that the collapsible section functions and all tags are used properly.

9. **Submit Your Work**:
   - Once you've confirmed the webpage works as expected, submit the following:
     - The zipped `unit02-cw` folder with the updated `index.html` file.

---

### **Grading Criteria**:

1. **Correct Use of Semantic Tags**:

   - The webpage uses `<header>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<summary>`, and `<details>` correctly to organize content.
   - Semantic tags are used appropriately for their intended purposes (e.g., `<main>` for primary content, `<aside>` for supplementary content).

2. **Logical Content Organization**:

   - The webpage has a clear and logical structure, with the main content in a `<main>` tag, and related information or additional resources in an `<aside>`.
   - The collapsible section (`<details>` and `<summary>`) works as expected.
