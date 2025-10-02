/*========== Email JS ===========*/
$(document).ready(function () {
      const $contactForm = $("#contact-form");
      const $contactMessage = $("#contact-message");

      const sendEmail = (e) => {
            e.preventDefault();

            // serverID - templateID - #form - publicKey
            emailjs
                  .sendForm(
                        "service_mh5st14",
                        "template_6n3z29f",
                        "#contact-form",
                        "y-5ed3UhrRkRhisUV"
                  )
                  .then(
                        () => {
                              const ok =
                                    (window.__EMAIL_I18N__ && window.__EMAIL_I18N__.success) ||
                                    "Message sent successfully ✅ i'll get back to you soon";
                              $contactMessage.text(ok);
                              setTimeout(() => {
                                    $contactMessage.text("");
                              }, 5000);
                              $contactForm[0].reset();
                        },
                        () => {
                              const err =
                                    (window.__EMAIL_I18N__ && window.__EMAIL_I18N__.error) ||
                                    "Error message ❌ please try again";
                              $contactMessage.text(err);
                        }
                  );
      };

      if ($contactForm.length) {
            $contactForm.on("submit", sendEmail);
      }
});

/*========== Show scroll up ===========*/
$(window).on("scroll", function () {
      const $scrollUp = $("#scroll-up");
      if ($scrollUp.length) {
            if ($(window).scrollTop() >= 350) {
                  $scrollUp.addClass("show-scroll");
            } else {
                  $scrollUp.removeClass("show-scroll");
            }
      }
});

/*========== Scroll section active link ===========*/
const $sections = $("section[id]");

$(window).on("scroll", function () {
      const scrollDown = $(window).scrollTop();

      $sections.each(function () {
            const $current = $(this);
            const sectionHeight = $current.outerHeight();
            const sectionTop = $current.offset().top - 58;
            const sectionId = $current.attr("id");
            const $sectionsClass = $(`.nav__list a[href*=${sectionId}]`);

            if (!$sectionsClass.length) return;

            if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
                  $sectionsClass.addClass("active-link");
            } else {
                  $sectionsClass.removeClass("active-link");
            }
      });
});

/*========== Scroll reveal animation ===========*/
// (คุณสามารถใส่ Library/โค้ดเพิ่มเติมตรงนี้ได้ภายหลัง)

/* ========== i18n Toggle (EN/TH) ========== */
const I18N_DICT = {
      en: {
            "meta.title": "Profile Website",

            "nav.homeTitle": "Home",
            "nav.projectTitle": "Project",
            "nav.educationTitle": "Education",
            "nav.contactTitle": "Contact",
            "nav.translateTitle": "Translate / แปล",

            "home.name": "Kanyawee \n Tipmod",
            "home.shortName": "Kanyawee(Nghin)",
            "home.btnProjects": "Projects",
            "home.btnEducation": "Education",
            "home.tagline":
                  "Passionate about creating and designing websites with the best engaging interfaces.",
            "home.download": "Download Resume",

            "about.displayName": "Kaywee Tipmod",
            "about.role": "Student Software Enginearing",
            "about.desc":
                  "Located in Phayao, Thailand. I am a student at the Faculty of Information Technology, University of Phayao. I am currently studying in the field of Software Engineering.I am also interested in learning new things and developing my skills.",
            "about.githubTitle": "GitHub Profile",
            "about.facebookTitle": "Facebook Profile",
            "about.instagramTitle": "Instagram Profile",
            "about.note":
                  "I believe that hands-on experience in a professional environment also enhance my teamwork and communication skills. If you are interested, please contact me. I will respond as soon as possible.",
            "about.contactBtn": "Contact Me",

            "skills.title": "Skills",
            "skills.note":
                  "Visit the project section to see the work done with these web technologies.",

            "projects.title": "RECENT PROJECTS",

            "proj.visitTitle": "Visit Project",
            "proj.visit": "Visit Project",

            "proj.hamtarot.name": "HAMTAROT",
            "proj.hamtarot.desc":
                  "A project during my first year of study about a website for fortune telling about daily life, studying, love, finance, and work. It is a simple website that can be used to tell fortunes using tarot cards.",

            "proj.mixit.name": "MIXIT",
            "proj.mixit.desc":
                  "A project during my second year of study about a website that combines games in a community format to talk about games that interest me or ask questions.",

            "proj.atbank.name": "ATBANK",
            "proj.atbank.desc":
                  "Mini project in the second year of study about a website made using Java by Netbean about a rough banking system such as deposits, transfers, etc.",

            "proj.schooldash.name": "School-Dashboard",
            "proj.schooldash.desc":
                  "Full-stack dashboard web app built using React, TypeScript, Next.js, and PostgreSQL. Featured advanced UI/UX, cloud-based media handling, form validation, and secure authentication. Designed for real-world demonstration during the university Open House.",

            "proj.karuphan.name": "Karuphan-Hospital(Under development)",
            "proj.karuphan.desc":
                  "This project is a final-year capstone system developed for the Primary and Holistic Care Unit (PCU) at Kiri Mat Hospital. It aims to streamline the management of hospital assets and inventory with an intuitive interface and a robust backend system.",

            "proj.profile.name": "Profile Website(Keep updating)",
            "proj.profile.desc":
                  "This portfolio website is a personal project created to showcase the various software development projects I have worked on during my academic journey. Built entirely with HTML, CSS, and JavaScript, it demonstrates my ability to develop clean, responsive, and interactive web interfaces.",

            "education.title": "EDUCATION",

            "edu.up.name": "University of Phayao",
            "edu.up.level": "Bachelor's degree",
            "edu.up.date": "2022-current",
            "edu.up.desc":
                  "Studying in the software engineering field, related to web application development, UX/UI design, etc.",

            "edu.skw.name1": "Sukhothai Wittayakom",
            "edu.skw.level1": "High school",
            "edu.skw.date1": "2019-2022",
            "edu.skw.desc1":
                  "The class is in the Science and Mathematics stream, studying Biology, Chemistry, Physics, etc.",

            "edu.skw.name2": "Sukhothai Wittayakom",
            "edu.skw.level2": "Junior high school",
            "edu.skw.date2": "2016-2019",
            "edu.skw.desc2":
                  "General basic subjects such as Science, Mathematics, English, Social studies, etc.",

            "contact.title": "CONTACT ME",
            "contact.namePlaceholder": "Name",
            "contact.emailPlaceholder": "Email",
            "contact.msgPlaceholder": "Message",
            "contact.send": "Send Message",

            "footer.brand": "Kanyawee",
            "footer.home": "Home",
            "footer.projects": "Projects",
            "footer.education": "Education",
            "footer.copy": "© 2024 Kanyawee. All right reserved.",
            "footer.discordTitle": "Discord Profile",
            "footer.lineTitle": "Line Profile",
            "footer.phoneTitle": "Call me 0932284976",

            "ui.scrollTop": "Scroll to top",

            "email.success": "Message sent successfully ✅ i'll get back to you soon",
            "email.error": "Error message ❌ please try again",
      },

      th: {
            "meta.title": "เว็บไซต์โปรไฟล์",

            "nav.homeTitle": "หน้าแรก",
            "nav.projectTitle": "ผลงาน",
            "nav.educationTitle": "การศึกษา",
            "nav.contactTitle": "ติดต่อ",
            "nav.translateTitle": "สลับภาษา TH/EN",

            "home.name": "กัญญาวีร์ \n ทิพโหมด",
            "home.shortName": "กัญญาวีร์(หงิญ)",
            "home.btnProjects": "ผลงาน",
            "home.btnEducation": "การศึกษา",
            "home.tagline":
                  "หลงใหลในการสร้างและออกแบบเว็บไซต์ที่ใช้งานง่ายและดึงดูดผู้ใช้",
            "home.download": "ดาวน์โหลดเรซูเม่",

            "about.displayName": "กัญญาวีร์ ทิพโหมด (Kaywee)",
            "about.role": "นักศึกษาวิศวกรรมซอฟต์แวร์",
            "about.desc":
                  "อยู่ที่จังหวัดพะเยา ประเทศไทย เป็นนักศึกษาคณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยพะเยา กำลังศึกษาในสาขาวิศวกรรมซอฟต์แวร์ และสนใจเรียนรู้สิ่งใหม่ ๆ เพื่อพัฒนาทักษะของตนเอง",
            "about.githubTitle": "โปรไฟล์ GitHub",
            "about.facebookTitle": "โปรไฟล์ Facebook",
            "about.instagramTitle": "โปรไฟล์ Instagram",
            "about.note":
                  "ฉันเชื่อว่าประสบการณ์จริงในสภาพแวดล้อมมืออาชีพยังช่วยเสริมสร้างทักษะการทำงานเป็นทีมและการสื่อสารของฉัน หากสนใจติดต่อได้ทางอีเมลส่วนตัว จะตอบกลับโดยเร็วที่สุด",
            "about.contactBtn": "ติดต่อฉัน",

            "skills.title": "ทักษะ",
            "skills.note": "ไปที่ส่วนผลงานเพื่อดูงานที่ทำด้วยเทคโนโลยีเว็บเหล่านี้",

            "projects.title": "ผลงานล่าสุด",

            "proj.visitTitle": "ไปที่โปรเจกต์",
            "proj.visit": "ไปที่โปรเจกต์",

            "proj.hamtarot.name": "HAMTAROT",
            "proj.hamtarot.desc":
                  "โปรเจกต์ช่วงปี 1 เว็บไซต์ดูดวงด้านชีวิตประจำวัน การเรียน ความรัก การเงิน และงาน ใช้ไพ่ทาโรต์ในการทำนาย ใช้งานง่าย",

            "proj.mixit.name": "MIXIT",
            "proj.mixit.desc":
                  "โปรเจกต์ช่วงปี 2 เว็บไซต์ชุมชนรวมเกมสำหรับแลกเปลี่ยนพูดคุย ถาม-ตอบเรื่องเกมที่สนใจ",

            "proj.atbank.name": "ATBANK",
            "proj.atbank.desc":
                  "มินิโปรเจกต์ปี 2 ระบบธนาคารอย่างง่าย พัฒนาใน Java (NetBeans) มีฝาก-โอน ฯลฯ",

            "proj.schooldash.name": "School-Dashboard",
            "proj.schooldash.desc":
                  "เว็บแอปแดชบอร์ดฟูลสแต็กด้วย React, TypeScript, Next.js, PostgreSQL มี UI/UX ขั้นสูง อัปโหลดสื่อ, ตรวจฟอร์ม, ยืนยันตัวตน ปรับใช้สำหรับสาธิตในงาน Open House",

            "proj.karuphan.name": "Karuphan-Hospital (กำลังพัฒนา)",
            "proj.karuphan.desc":
                  "โปรเจคสอบจบ(กรณีศึกษา)สำหรับกลุ่มงานบริการด้านปฐมภูมิและองค์รวม โรงพยาบาลคีรีมาศ จังหวัดสุโขทัย จัดการครุภัณฑ์และการยืมคืนให้ใช้งานง่ายบนเว็บไซต์ ทดแทนการจดบันทึกลงกระดาษแบบเดิม",

            "proj.profile.name": "Profile Website (อัปเดตต่อเนื่อง)",
            "proj.profile.desc":
                  "เว็บไซต์พอร์ตโฟลิโอเพื่อแสดงผลงานพัฒนาซอฟต์แวร์ระหว่างเรียน พัฒนาด้วย HTML, CSS, JavaScript โชว์การทำเว็บที่สะอาด ตอบสนอง และโต้ตอบได้ดี",

            "education.title": "การศึกษา",

            "edu.up.name": "มหาวิทยาลัยพะเยา",
            "edu.up.level": "ปริญญาตรี",
            "edu.up.date": "2022–ปัจจุบัน",
            "edu.up.desc": "ศึกษาด้านวิศวกรรมซอฟต์แวร์ พัฒนาเว็บแอป UX/UI และอื่น ๆ",

            "edu.skw.name1": "โรงเรียนสุโขทัยวิทยาคม",
            "edu.skw.level1": "มัธยมปลาย",
            "edu.skw.date1": "2019–2022",
            "edu.skw.desc1": "สายวิทย์-คณิต เรียน ชีววิทยา เคมี ฟิสิกส์ เป็นต้น",

            "edu.skw.name2": "โรงเรียนสุโขทัยวิทยาคม",
            "edu.skw.level2": "มัธยมต้น",
            "edu.skw.date2": "2016–2019",
            "edu.skw.desc2": "วิชาพื้นฐานทั่วไป เช่น วิทย์ คณิต อังกฤษ สังคม",

            "contact.title": "ติดต่อฉัน",
            "contact.namePlaceholder": "ชื่อ",
            "contact.emailPlaceholder": "อีเมล",
            "contact.msgPlaceholder": "ข้อความ",
            "contact.send": "ส่งข้อความ",

            "footer.brand": "กัญญาวีร์",
            "footer.home": "หน้าแรก",
            "footer.projects": "ผลงาน",
            "footer.education": "การศึกษา",
            "footer.copy": "© 2024 กัญญาวีร์ สงวนลิขสิทธิ์",
            "footer.discordTitle": "โปรไฟล์ Discord",
            "footer.lineTitle": "โปรไฟล์ Line",
            "footer.phoneTitle": "โทรหาฉัน 0932284976",

            "ui.scrollTop": "เลื่อนขึ้นด้านบน",

            "email.success": "ส่งข้อความสำเร็จ ✅ จะตอบกลับโดยเร็ว",
            "email.error": "เกิดข้อผิดพลาด ❌ กรุณาลองใหม่อีกครั้ง",
      },
};

function applyLang(lang) {
      // ตั้งค่า lang ใน <html>
      $("html").attr("lang", lang === "th" ? "th" : "en");

      // ข้อความปกติ
      $("[data-i18n]").each(function () {
            const $el = $(this);
            const key = $el.attr("data-i18n");
            const text = I18N_DICT[lang][key];
            if (typeof text === "string") {
                  // รองรับขึ้นบรรทัดใหม่ด้วย \n
                  $el.empty();
                  const lines = text.split("\n");
                  lines.forEach((line, i) => {
                        if (i > 0) $el.append("<br>");
                        $el.append(document.createTextNode(line));
                  });
            }
      });

      // แปล attributes เช่น title, placeholder, href, src
      $("[data-i18n-attr]").each(function () {
            const $el = $(this);
            const mapping = $el
                  .attr("data-i18n-attr")
                  .split(",")
                  .map((s) => s.trim()); // e.g. ["placeholder:contact.namePlaceholder","title:..."]

            mapping.forEach((pair) => {
                  const [attr, key] = pair.split(":").map((s) => s.trim());
                  const val = I18N_DICT[lang][key];
                  if (val != null) $el.attr(attr, val);
            });
      });

      // ผูกข้อความผลลัพธ์ EmailJS
      window.__EMAIL_I18N__ = {
            success: I18N_DICT[lang]["email.success"],
            error: I18N_DICT[lang]["email.error"],
      };

      // จำภาษา
      localStorage.setItem("lang", lang);
}

// สลับภาษาเมื่อกดปุ่ม
$(document).ready(function () {
      const $langToggleBtn = $("#lang-toggle");
      if ($langToggleBtn.length) {
            $langToggleBtn.on("click", function () {
                  const saved = localStorage.getItem("lang");
                  const browserPref = (navigator.language || "")
                        .toLowerCase()
                        .startsWith("th")
                        ? "th"
                        : "en";
                  const current = saved || browserPref;
                  const next = current === "th" ? "en" : "th";
                  applyLang(next);
            });
      }

      // โหลดภาษาที่เคยเลือกไว้ หรือเดาตามเบราว์เซอร์ครั้งแรก
      const saved = localStorage.getItem("lang");
      const initial =
            saved ||
            ((navigator.language || "").toLowerCase().startsWith("th") ? "th" : "en");
      applyLang(initial);
});
