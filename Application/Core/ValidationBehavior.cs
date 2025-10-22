using System;
using FluentValidation;
using MediatR;

namespace Application.Core;

public class ValidationBehavior<TRequest, TRespon>(IValidator<TRequest>? validator = null)
    : IPipelineBehavior<TRequest, TRespon> where TRequest : notnull
{
    public async Task<TRespon> Handle(TRequest request, RequestHandlerDelegate<TRespon> next, CancellationToken cancellationToken)
    {
        if (validator == null) return await next();

        var validationResult = await validator.ValidateAsync(request, cancellationToken);

        if (!validationResult.IsValid)
        {
            throw new ValidationException(validationResult.Errors);
        }
        
        return await next();
    }
}
