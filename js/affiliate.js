/**
 * Shopee Affiliate Link Manager
 * ===============================
 * จับคู่ลิงก์ตามลำดับที่ชัยส่ง:
 * 1. SoundPEATS Air6 HS
 * 2. Bass BP1 Pro
 * 3. ANKER Soundcore R50i NC
 * 4. Edifier X1 Lite
 * 5. Redmi Buds 6 Active
 * 6. Erazer XT80 Pro
 * 7. QCY Buds ANC
 * 8. Vention ECHO CLIP A1
 */

const affiliateLinks = {
    'AFF_1': 'https://s.shopee.co.th/LlTAt3RiN',
    'AFF_2': 'https://s.shopee.co.th/5fmzX3Vabb',
    'AFF_3': 'https://s.shopee.co.th/6ffWj0fw31',
    'AFF_4': 'https://s.shopee.co.th/5VTZKw99vq',
    'AFF_5': 'https://s.shopee.co.th/qhjmXVlIX',
    'AFF_6': 'https://s.shopee.co.th/903RVfEgee',
    'AFF_7': 'https://s.shopee.co.th/8Knkia9wii',
    'AFF_8': 'https://s.shopee.co.th/3LP4lXBfGc',
};

// ========== Click Tracking ==========
function trackClick(productId) {
    const clicks = JSON.parse(localStorage.getItem('aff_clicks') || '{}');
    clicks[productId] = (clicks[productId] || 0) + 1;
    localStorage.setItem('aff_clicks', JSON.stringify(clicks));
}

// ========== Bind Affiliate Links ==========
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('[data-affiliate]');

    buttons.forEach(btn => {
        const key = btn.getAttribute('data-affiliate');
        const url = affiliateLinks[key];

        if (url) {
            btn.href = url;
            btn.target = '_blank';
            btn.rel = 'nofollow sponsored noopener';
            btn.addEventListener('click', () => trackClick(key));
        } else {
            console.warn('⚠️ ไม่พบ affiliate link สำหรับ:', key);
            btn.href = '#';
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                alert('🔧 กำลังตั้งค่าระบบ affiliate — กลับมาใหม่เร็วๆ นี้!');
            });
        }
    });

    console.log('📊 Affiliate clicks:', JSON.parse(localStorage.getItem('aff_clicks') || '{}'));
});
