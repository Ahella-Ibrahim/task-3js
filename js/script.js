document.getElementById("myForm").addEventListener("submit",function (event) {
    event.preventDefault();
    const dayInput = document.getElementById("dayInput").value.trim();
    const messageDiv = document.getElementById("message");
    let message;
    switch (dayInput) {
        case `السبت`:
            message = "السبت بداية أسبوع جديد، ابدأ يومك بنشاط وتفاؤل!";
            break;
        case 'الاحد':
            message = "الأحد يوم جميل لتحقيق أهدافك، ابدأ بقوة! ";
            break;
        case 'الاثنين':
            message = "الاثنين فرصة جديدة للنجاح والتقدم! ";
            break;
        case 'الثلاثاء':
            message = "الثلاثاء خليك مستمر، تعبك النهارده هيجيب نتيجة بكرة! ";
            break;
        case 'الاربعاء':
            message = "وصلنا لنص الأسبوع، كمل وماتستسلمش! ";
            break;
        case 'الخميس':
            message = "الخميس قربت الويك إند، خلص يومك بإنجاز جميل! ";
            break;
        case 'الجمعة':
            message = "الجمعة يوم راحة وهدوء، استمتع بوقتك مع أحبابك! ";
            break;
        default:
            message = "من فضلك اكتبي يوم صحيح من أيام الأسبوع باللغة العربية.";
            messageDiv.className = "message error";
    }
    messageDiv.textContent = message;
    if (!messageDiv.className.includes("error")) {
        messageDiv.className = "message";
    }
})