
            window.calcTip = function() {
                const b = parseFloat(document.getElementById('tip-bill').value);
                const p = parseFloat(document.getElementById('tip-pct').value) / 100;
                const n = parseInt(document.getElementById('tip-people').value || 1);
                const res = document.getElementById('tip-res');
                if(!b) return;
                const tot = (b * (1 + p)) / n;
                res.innerHTML = `Each Person Pays: <strong>$${tot.toFixed(2)}</strong>`;
            }
        