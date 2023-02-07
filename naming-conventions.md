# Naming Conventions

A collection of guidelines for writing file names, branches, commits, css classes, etc.

---

## File Names

### Use dashes as delimiters (kebab-case)

- You should use only dashes (-) as delimiters.
- Never use spaces or underscores. Spaces are converted to %20 in URLs or can break an URL when shared. Underscores are difficult to see when the file name is displayed as an underlined link.

### Do not use special characters

Avoid using non-alphanumeric characters in file names, such as: '\*' ':' '' '/' '<' '>' '|' '"' '!' '?' '[' ']' ';' '=' '+' '&' '£' '$' '€' '%' or ','. These characters can have special meaning in programming languages or can cause problems with different operating systems.

### Use lowercase, never uppercase

- We should always consider URLs as case-sensitive according to W3.org. Therefore, use lowercase to reduces errors when typing URLs.

#### ✅ Examples of correct usage:

<pre>file-name.html
file-name-for-styles.css
file-name-1.html
file-name-1920x1080.jpg</pre>

#### ❌ Examples of wrong usage:

<pre>
html file name.html
file_name_for_styles.css
1-file-name.html
</pre>

---

## CSS Classes

### Use dashes as delimiters (kebab-case)

- You should use only dashes (-) as delimiters.
- Class name should not begin with a digit and should not contain spaces.

### Don't use special characters

- Avoid using non-alphanumeric characters, such as: '\*' ':' '' '/' '<' '>' '|' '"' '!' '?' '[' ']' ';' '=' '+' '&' '£' '$' '€' '%' or ','

### Use lowercase, never uppercase

- Use only lowercase letters

### Class Naming Rules

- Class names should always follow this rule:

  <pre>block-element-modifier</pre>

  - _Block:_ The outermost parent element of the component is defined as the block.
  - _Element:_ Inside of the component may be one or more children called elements.
  - _Modifier:_ Either a block or element may have a variation signified by a modifier.

#### ✅ Examples of correct naming:

<pre>
block
block-element
block-element-element...
block-element-modifier
block-element-element...-modifier
</pre>

#### ✅ Examples of correct usage:

<pre>class="header-logo"
class="header-logo-dark"
class="card"
class="card-header-title"
class="card-header-title-dark"
class="card-image-small"</pre>

#### ❌ Examples of wrong usage:

<pre>
class="header logo"
class="header_logo_dark"
class="cardtitle"
class="1-card-image"
</pre>

---

## Git Branches

### Use dashes as delimiters (kebab-case)

- You should use only dashes (-) as delimiters.

### Don't use special characters

- Avoid using non-alphanumeric characters, such as: '\*' ':' '' '/' '<' '>' '|' '"' '!' '?' '[' ']' ';' '=' '+' '&' '£' '$' '€' '%' or ','

### Use lowercase, never uppercase

- Use only lowercase letters

### Branch Naming Rules

- Branch names consist of three parts separated by hyphens '-'

  `taskid-tasktype-task-description`

  - _taskid:_ The id of the Trello's Task.
  - _tasktype:_ it should indicate the task type:
    - _feat:_ new feature
    - _fix:_ bug fix
    - _docs:_ changes to the documentation
  - _task-description:_ a short description of the task.

#### ✅ Examples of correct usage:

<pre>12-feat-footer
24-feat-header-buttons
31-fix-header-buttons-typos</pre>

---

## Git Commits

### Don't use special characters

- Avoid using non-alphanumeric characters, such as: '\*' ':' '' '/' '<' '>' '|' '"' '!' '?' '[' ']' ';' '=' '+' '&' '£' '$' '€' '%' or ','

### Use lowercase, never uppercase

- Use only lowercase letters

### Commit Naming Rules

- Commit message consists of two parts separated by a colon ':', the type and the message

  `type: commit message`

  - _type:_ it should indicate the commit type:
    - _feat:_ new feature
    - _fix:_ bug fix
    - _docs:_ changes to the documentation
  - _commit message:_ a short description of the commit.

#### ✅ Examples of correct usage:

<pre>feat: add login buttons in header
feat: add icons in footer
fix: mispelling in copyright
fix: cards style</pre>
