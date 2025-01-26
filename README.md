

- [Sequelize](https://sequelize.org/)
- [Sequelize Setup](https://sequelize.org/docs/v6/getting-started/)
- [The Sequelize CLI](https://github.com/sequelize/cli?tab=readme-ov-file#usage)
- [Cron Jobs](https://chatgpt.com/share/678e6b7d-81c0-8004-b8e9-396227441ff2)

- **Dynamic Methods by Sequelize** :- When the `hasMany` relationship is defined, Sequelize automatically generates association methods for the related models. These methods allow you to interact with the associated data. Some of the methods generated for the City model in this case include :-
    - `createAirport` :- Creates a new Airport instance associated with the specific `City` instance.
    - `getAirports`: Retrieves all Airport instances associated with the `City`.
    - `addAirport`: Associates an existing `Airport` instance with the `City`.
    - `removeAirport`: Removes the association between a specific `Airport` and the `City`.

- These methods are available on the City instance (bangalore in your example) and operate based on the relationship defined in your models.