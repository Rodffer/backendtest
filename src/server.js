import app from './app';

app.get('/', (req, res) => res.json({ ok: true }));

app.listen(3333);
