const express = require('express');

const Action = require('../../../data/helpers/actionModel');

const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const actions = await Action.get();
		res.status(200).json(actions);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.get('/:id', async (req, res) => {
	try {
		const actions = await Action.get(req.params.id);
		res.status(200).json(actions);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.post('/', async (req, res) => {
	try {
		const action = await Action.insert(req.body);
		res.status(200).json(action);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.delete('/:id', async (req, res) => {
	try {
		const action = await Action.remove(req.params.id);
		res.status(200).json(action);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.put('/:id', async (req, res) => {
	try {
		const action = await Action.update(req.params.id, req.body);
		res.status(200).json(action);
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;
